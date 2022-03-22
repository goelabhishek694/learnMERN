const request = require("request");
const cheerio = require("cheerio");

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
      console.log(matchResEle.text());
  //4. get team names
    
}
//visit every scorecard and get info 
module.exports = {
    gifs:getInfoFromScorecard
}