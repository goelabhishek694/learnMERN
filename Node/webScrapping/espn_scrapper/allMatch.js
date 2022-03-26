const request = require("request");
const cheerio = require("cheerio");
// const getScorecardObj = require("./scorecards");
const {gifs} = require("./scorecards");
function getAllMatch(url) {
    // console.log("from allMatch.js ",url);
    request(url, cb);
}
function cb(err, res, body) {
  if (err) {
    console.error("error", err);
  } else {
    extractAllMatchLink(body);
  }
}
function extractAllMatchLink(html){
    let selecTool = cheerio.load(html);
    let scorecardElemArr = selecTool('a[data-hover="Scorecard"]');
    console.log(scorecardElemArr.length);
    //attr methods -> Method for getting all attributes and their values
    for (let i = 0; i < scorecardElemArr.length; i++){
        let scorecardLink = selecTool(scorecardElemArr[i]).attr("href");
        // console.log(i + 1 + ") " + scorecardLink);
        let fullLink = "https://www.espncricinfo.com" + scorecardLink;
        // getScorecardObj.gifs(fullLink);
        gifs(fullLink);
        // break;

    }
}
module.exports = {
  getAllMatch: getAllMatch,
};