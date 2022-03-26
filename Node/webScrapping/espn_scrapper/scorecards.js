const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

function getInfoFromScorecard(url) {
//   console.log("from scorecards.js ",url);
    // we have a url of a scorecard, we want to get html of that scorecard
  request(url, cb);
}


function cb(err,res,body) {
    if (err) {
        console.log(err);
    }
    else {
        getMatchDetails(body);
    }
}

function getMatchDetails(html) {
  // selectool contains html of ith scorecrad
  let selecTool = cheerio.load(html);

  //1. get venue
  //2. get date
  let desc = selecTool(".match-header-info.match-info-MATCH");
//   console.log(desc.text());
    let descArr = desc.text().split(",");
  //Match (N), Abu Dhabi, Oct 25 2020, Indian Premier League
    // console.log(descArr);
    let dateOfMatch = descArr[2];
    let venueOfMatch = descArr[1];
    console.log(dateOfMatch);
    console.log(venueOfMatch);
    //3. get result
      let matchResEle = selecTool(
        ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text"
      );
  let matchResult = matchResEle.text();;
      console.log(matchResult);
  //4. get team names
  let teamNameArr = selecTool(".name-detail>.name-link");
  // console.log(teamNames.text());
  let ownTeam = selecTool(teamNameArr[0]).text();
  let opponentTeam = selecTool(teamNameArr[1]).text();
  console.log(ownTeam);
  console.log(opponentTeam);

  //5. get innings 

  let allBatsmenTable = selecTool(".table.batsman tbody");
  console.log("number of batsmen tables are ->   ",allBatsmenTable.length);
  let htmlString = "";
  let count = 0;
  for (let i = 0; i < allBatsmenTable.length; i++) {
    htmlString = htmlString + selecTool(allBatsmenTable[i]).html();
    //Get the descendants(table rows ) of each element (table )
    let allRows = selecTool(allBatsmenTable[i]).find("tr"); // -> data of batsmen + empty rows 
    
    for (let i = 0; i < allRows.length; i++) {
      //Check to see if any of the matched elements have the given className
      let row = selecTool(allRows[i]);
      let firstColmnOfRow = row.find("td")[0];
      if (selecTool(firstColmnOfRow).hasClass("batsman-cell")) {
        //will be getting valid data
        // count++;
        // console.log("inside " + count);
        // name | runs | balls | 4's | 6's | sr
        // for (let i = 0; i < 8; i++) {
        //   if (i == 1 || i == 4) continue;
        //   else {
        //     console.log(selecTool(row.find("td")[i]).text());
        //   }
        // }
        let playerName = selecTool(row.find("td")[0]).text().trim();
        // console.log(playerName);
        let runs = selecTool(row.find("td")[2]).text();
        let balls = selecTool(row.find("td")[3]).text();
        let numberOf4 = selecTool(row.find("td")[5]).text();
        let numberOf6 = selecTool(row.find("td")[6]).text();
        let sr = selecTool(row.find("td")[7]).text();

        console.log(
          `playerName -> ${playerName} runsScored ->  ${runs} ballsPlayed ->  ${balls} numbOfFours -> ${numberOf4} numbOfSixes -> ${numberOf6}  strikeRate-> ${sr}`
        );

        processInformation(
          dateOfMatch,
          venueOfMatch,
          matchResult,
          ownTeam,
          opponentTeam,
          playerName,
          runs,
          balls,
          numberOf4,
          numberOf6,
          sr
        );
      }
    }
  }

  function processInformation(dateOfMatch,venueOfMatch,matchResult,ownTeam,opponentTeam,playerName,runs,balls,numberOf4,numberOf6,sr) {
    let teamNamePath = path.join(__dirname, "IPL", ownTeam);
    if (!fs.existsSync(teamNamePath)) {
      fs.mkdirSync(teamNamePath);
    }

    let playerPath = path.join(teamNamePath, playerName + ".xlsx");
    let content = excelReader(playerPath, playerName);

    let playerObj = {
      dateOfMatch,
      venueOfMatch,
      matchResult,
      ownTeam,
      opponentTeam,
      playerName,
      runs,
      balls,
      numberOf4,
      numberOf6,
      sr
    };

    content.push(playerObj);
    //this function writes all the content into excel sheet , and places that excel sheet data into playerPath-> rohitSharma.xlsx
    excelWriter(playerPath, content, playerName);
    
  }
    
  // console.log(htmlString);
}
//this function reads the data from excel file
function excelReader(playerPath, sheetName) {
  if (!fs.existsSync(playerPath)) {
    //if playerPath does not exists, this means that we have never placed any data into that file 
    return [];
  }
  //if playerPath already has some data in it 
  let workBook = xlsx.readFile(playerPath);
  //A dictionary of the worksheets in the workbook. Use SheetNames to reference these.
  let excelData = workBook.Sheets[sheetName];
  let playerObj = xlsx.utils.sheet_to_json(excelData);
  return playerObj;
}

function excelWriter(playerPath, jsObject, sheetName) {
  //Creates a new workbook
  let newWorkBook = xlsx.utils.book_new();
  //Converts an array of JS objects to a worksheet.
  let newWorkSheet = xlsx.utils.json_to_sheet(jsObject);
  //it appends a worksheet to a workbook
  xlsx.utils.book_append_sheet(newWorkBook, newWorkSheet, sheetName);
  // Attempts to write or download workbook data to file
  xlsx.writeFile(newWorkBook, playerPath);
}






//visit every scorecard and get info 
module.exports = {
    gifs:getInfoFromScorecard
}