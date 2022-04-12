const request = require("request");
const cheerio = require("cheerio");
let { jsPDF } = require("jspdf");
const fs = require("fs");

let $;
//1
//This object will contain all issues and their links
let data = {};

//2-A
//fetch the topics page of github
request("https://github.com/topics", function (err, res, body) {
  $ = cheerio.load(body);
  //2-B
  //get top 3 topics anchor tag
  let topThreeTopics = $(
    ".no-underline.d-flex.flex-column.flex-justify-center"
  );

  //2-C
  //get the href attribute of those 3 anchor tags
  //since they won't have complete url pass them to topicLinkGenerator function
  //to get complete links and pass getTopicPage function as callback
  for (let i = 0; i < 3; i++) {
    topicLinkGenerator($(topThreeTopics[i]).attr("href"), getTopicPage);
  }
});

//3
//this function adds the domain name to complete the url and pass that url to getTopicPage function
function topicLinkGenerator(subLink, callback) {
  callback("https://github.com" + subLink);
}

//4
//this function requests the topic page by the url passed to it
//also extracts by spliting the topic name
//calls the findProjects function by passing them topicName body of the topic page which was requested and findIssues function.
function getTopicPage(url) {
  request(url, function (err, res, body) {
    let urlArray = url.split("/");
    let topicName = urlArray[urlArray.length - 1];
    findProjects(topicName, body, findIssues);
  });
}

//5-A
//callback received is findIssues
function findProjects(folderName, body, callback) {
  //5-B
  // creates folder using the topic name passed to it during the function call
  fs.mkdirSync(folderName);
  //5-C
  //if body of requested page is empty return
  if (!body) {
    return;
  } else {
    $ = cheerio.load(body);
  }
  //5-D
  //get h1 all projects of in the page
  let allProjects = $(".d-flex.flex-justify-between.my-3 h1 ");
  //5-E
  //if projects are more than 8 make them 8
  if (allProjects.length > 8) {
    allProjects = allProjects.slice(0, 8);
  }

  //5-F
  //h1 of a project containes 2 anchor tags
  // the second anchor tag contains project url
  //use that url and make it issue url by simply adding /issues to it
  //pass that url to the callback along with folderName and projectName and issueProcessor as callback
  for (let i = 0; i < allProjects.length; i++) {
    callback(
      "https://github.com" +
        $($(allProjects[i]).find("a")[1]).attr("href") +
        "/issues",
      folderName,
      issueProcessor,
      $($(allProjects[i]).find("a")[1]).text()
    );
  }
}

//6
//callback received here is issueProcessor
// this function get the issue page of project and passes each issue with its url to the callback
function findIssues(url, folderName, callback, projectName) {
  request(url, (err, res, body) => {
    if (!body) {
      return;
    } else {
      $ = cheerio.load(body);
    }
    let allIssues = $(
      ".Link--primary.v-align-middle.no-underline.h4.js-navigation-open"
    );
    if (allIssues.length <= 0) {
      callback(folderName, null, null);
    } else {
      for (let i = 0; i < allIssues.length; i++) {
        callback(
          folderName,
          $(allIssues[i]).text(),
          "https://github.com" + $(allIssues[i]).attr("href"),
          projectName
        );
      }
    }
  });
}

//7
//this function adds the issue along with project and topic to data object
// and using that data object creates pdf
function issueProcessor(topic, issue, issueUrl, projectName) {
  if (projectName) projectName = projectName.trim();

  if (issue) {
    let pdfPath = `./${topic}/${projectName}.pdf`;
    if (!data[topic]) {
      data[topic] = [
        { projectName: projectName, issues: [{ issue, url: issueUrl }] },
      ];

      pdfGenerator(pdfPath, projectName, topic);
    } else {
      let requiredProjectIndex = data[topic].findIndex(
        (p) => p.projectName === projectName
      );

      if (requiredProjectIndex !== -1) {
        data[topic][requiredProjectIndex].issues.push({ issue, url: issueUrl });
        pdfGenerator(pdfPath, projectName, topic);
      } else {
        data[topic].push({
          projectName: projectName,
          issues: [{ issue, url: issueUrl }],
        });
        pdfGenerator(pdfPath, projectName, topic);
      }
    }
  }
}

//8
//function used to create pdf
function pdfGenerator(path, projectName, topic) {
  let doc = new jsPDF();
  let requiredIssues = data[topic].find(
    (p) => p.projectName === projectName
  ).issues;
  requiredIssues.forEach(function (issue, i) {
    doc.text(5, 15 + i * 15, "issue: " + issue.issue + "\nURL: " + issue.url);
  });
  doc.save(path);
}
