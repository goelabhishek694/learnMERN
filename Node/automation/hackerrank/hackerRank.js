const puppeteer = require("puppeteer");
let { email, password } = require('./secrets');
// let email = "";
// let password = "";
let { answer } = require("./codes");
let curTab;
let browserOpenPromise = puppeteer.launch({
  headless: false, 
  defaultViewport: null,
  args: ["--start-maximized"]
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
    let allTabsPromise = browser.pages(); // browser.newPage() -> new tab open hta h 
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
    let emailWillBeTypedPromise = curTab.type("input[name='username']", email, {delay:100});
    return emailWillBeTypedPromise;
  })
  .then(function () {
    console.log("email is typed");
    let passwordWillBeTypedPromise = curTab.type(
      "input[type='password']",
      password,
      { delay: 100 }
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
    // console.log(linksArr);
    //question solve krna h
                              //link to the question to besolved, idx of the linksArr
    let questionWillBeSolvedPromise = questionSolver(linksArr[0], 0);
    for (let i = 1; i < linksArr.length; i++){
      questionWillBeSolvedPromise = questionWillBeSolvedPromise.then(function () {
        return questionSolver(linksArr[i], i);
      })
      // a = 10;
      // a = a + 1;
    }
    return questionWillBeSolvedPromise;
  }).
  then(function () {
    console.log("question is solved");
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
        reject(err);
      })
  });
  return waitClickPromise;
}

function questionSolver(url, idx) {
  return new Promise(function (resolve, reject) {
    let fullLink = `https://www.hackerrank.com${url}`;
    let goToQuesPagePromise = curTab.goto(fullLink);
    goToQuesPagePromise
      .then(function () {
        console.log("question opened");
        //tick the custom input box mark
        let waitForCheckBoxAndClickPromise = waitAndClick(".checkbox-input");
        return waitForCheckBoxAndClickPromise;
      })
      .then(function () {
        //select the box where code will be typed
        let waitForTextBoxPromise = curTab.waitForSelector(".custominput");
        return waitForTextBoxPromise;
      })
      .then(function () {
        let codeWillBeTypedPromise = curTab.type(".custominput", answer[idx], {
          delay: 100,
        });
        return codeWillBeTypedPromise;
      })
      .then(function () {
        //control key is pressed promise
        let controlPressedPromise = curTab.keyboard.down("Control");
        return controlPressedPromise;
      })
      .then(function () {
        let aKeyPressedPromise = curTab.keyboard.press("a");
        return aKeyPressedPromise;
      })
      .then(function () {
        let xKeyPressedPromise = curTab.keyboard.press("x");
        return xKeyPressedPromise;
      })
      .then(function () {
        let ctrlIsReleasedPromise = curTab.keyboard.up("Control");
        return ctrlIsReleasedPromise;
      })
      .then(function () {
        //select the editor promise
        let cursorOnEditorPromise = curTab.click(
          ".monaco-editor.no-user-select.vs"
        );
        return cursorOnEditorPromise;
      })
      .then(function () {
        //control key is pressed promise
        let controlPressedPromise = curTab.keyboard.down("Control");
        return controlPressedPromise;
      })
      .then(function () {
        let aKeyPressedPromise = curTab.keyboard.press("A");
        return aKeyPressedPromise;
      })
      .then(function () {
        let vKeyPressedPromise = curTab.keyboard.press("V");
        return vKeyPressedPromise;
      })
      .then(function () {
        let controlDownPromise = curTab.keyboard.up("Control");
        return controlDownPromise;
      })
      .then(function () {
        let submitButtonClickedPromise = curTab.click(".hr-monaco-submit");
        return submitButtonClickedPromise;
      })
      .then(function () {
        console.log("code submitted successfully");
        resolve();
      })
      .catch(function (err) {
        reject(err);
      });
  });
}
