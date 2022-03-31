const puppeteer = require("puppeteer");
// let {email}=
let email = "";
let password = "";

let cTab;
let browserOPenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
  //chrome://version/
  // executablePath:
  //   "//Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
browserOPenPromise //fulfill
  .then(function (browser) {
    console.log("browser is open");
    // console.log(browser);
    //An array of all open pages inside the Browser.
    let allTabsPromise = browser.pages();
    return allTabsPromise;
  })
  .then(function (allTabsArr) {
    cTab = allTabsArr[0];
    console.log("new tab");
    //URL to navigate page to
    let visitingLoginPagePromise = cTab.goto("https://www.hackerrank.com/auth/login");
    return visitingLoginPagePromise;
  })
  .then(function () {
    console.log("Hackerrank login page opened");
    let emailWillBeTypedPromise = cTab.type("input[name='username']", email);
    return emailWillBeTypedPromise;
  })
  .then(function () {
    console.log("email is typed");
    let passwordWillBeTypedPromise = cTab.type("input[type='password']", password);
    return passwordWillBeTypedPromise;
  })
  .then(function () {
    console.log("password has been typed");
    let willBeLoggedInPromise = cTab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    );
    return willBeLoggedInPromise;
  })
  .then(function () {
    console.log("logged into hackerrank successfully");
  })
  .catch(function (err) {
    console.log(err);
  });

