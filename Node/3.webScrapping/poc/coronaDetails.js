const request = require("request");
//cheerio
// Cheerio parses HTML and it traverses the html so that data can be manipulated according to user's needs
const cheerio=require("cheerio");
request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, body) {
    if(err){
        console.error("error", err);
    }
    else {
        handleHtml(body);
    }
}

function handleHtml(html) {
    
    let selecTool = cheerio.load(html);

    let coronaStatsArr = selecTool(".maincounter-number");

    // console.log(coronaStats.text());

    let totalCases = selecTool(coronaStatsArr[0]).text();
    console.log("Total Cases -> " + totalCases);

    let totalDeaths = selecTool(coronaStatsArr[1]).text();
    console.log("Total Deaths -> " + totalDeaths);

    let totalRecovered = selecTool(coronaStatsArr[2]).text();
    console.log("Total Patients Recovered -> " + totalRecovered);
}




