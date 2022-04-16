//q1. read 3 files f1.txt,f2.txt,f3.txt serially using promises

// 2nd way to overcome callback hell is to use promises 

const fs = require("fs");

let f1readPromise = fs.promises.readFile("f1.txt");

function readf2file(data) {
  console.log(data + "");
  let f2readPromise = fs.promises.readFile("f2.txt");
  return f2readPromise;
}

function readf3File(data) {
  console.log(data + "");
  let f3readPromise = fs.promises.readFile("f3.txt");
  return f3readPromise;
}

function alldone(data) {
  console.log(data + "");
  console.log("read all files serially ");
}

f1readPromise
  .then(readf2file)
  .then(readf3File)
  .then(alldone)
    .catch(function (err) {
        console.log(err)
    });