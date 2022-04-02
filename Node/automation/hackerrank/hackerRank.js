const puppeteer = require("puppeteer");
let { email, password } = require('./secrets');
// let email = "";
// let password = "";

let curTab;
let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
  //chrome://version/
  // executablePath:
  //   "//Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
// console.log(browserOpenPromise);
browserOpenPromise //fulfill
  .then(function (browser) {
    console.log("browser is open");
    console.log(browserOpenPromise);
    // console.log(browser);
    //An array of all open pages inside the Browser.
    //returns an array with all the pages in all browser contexts
    let allTabsPromise = browser.pages();
    return allTabsPromise;
  })
  .then(function (allTabsArr) {
    curTab = allTabsArr[0];
    console.log("new tab");
    //URL to navigate page to
    let visitingLoginPagePromise = curTab.goto(
      "https://www.hackerrank.com/auth/login"
    );
    return visitingLoginPagePromise;
  })
  .then(function (data) {
    // console.log(data);
    console.log("Hackerrank login page opened");
    //selector(where to type), data(what to type)
    let emailWillBeTypedPromise = curTab.type("input[name='username']", email);
    return emailWillBeTypedPromise;
  })
  .then(function () {
    console.log("email is typed");
    let passwordWillBeTypedPromise = curTab.type(
      "input[type='password']",
      password
    );
    return passwordWillBeTypedPromise;
  })
  .then(function () {
    console.log("password has been typed");
    let willBeLoggedInPromise = curTab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    );
    return willBeLoggedInPromise;
  })
  .then(function () {
    console.log("logged into hackerrank successfully");
    //waitAndClick will wait for the selector to load , and then click on the node
    let algorithmTabWillBeOPenedPromise = waitAndClick(
      "div[data-automation='algorithms']"
    );
    return algorithmTabWillBeOPenedPromise;
  })
  .then(function () {
    console.log("algorithm page is opened");
    let allQuesPromise = curTab.waitForSelector(
      'a[data-analytics="ChallengeListChallengeName"]'
    );
    return allQuesPromise;
  })
  .then(function () {
    function getAllQuesLinks() {
      let allElemArr = document.querySelectorAll(
        'a[data-analytics="ChallengeListChallengeName"]'
      );
      let linksArr = [];
      for (let i = 0; i < allElemArr.length; i++) {
        linksArr.push(allElemArr[i].getAttribute("href"));
      }
      return linksArr;
    }

    let linksArrPromise = curTab.evaluate(getAllQuesLinks);
    return linksArrPromise;
  })
  .then(function (linksArr) {
    console.log("links to all ques received");
    console.log(linksArr);
    //question solve krna h
  })
  .catch(function (err) {
    console.log(err);
  });
function waitAndClick(algoBtn) {
  let waitClickPromise = new Promise(function (resolve, reject) {
    let waitForSelectorPromise = curTab.waitForSelector(algoBtn);
    waitForSelectorPromise
      .then(function () {
        console.log("algo btn is found");
        let clickPromise = curTab.click(algoBtn);
        return clickPromise;
      })
      .then(function () {
        console.log("algo btn is clicked");
        resolve();
      })
      .catch(function (err) {
        console.log(err);
      })
  });
  return waitClickPromise;
}
