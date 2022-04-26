//q1. read 3 files f1.txt,f2.txt,f3.txt serially using promises

// 2nd way to overcome callback hell is to use promises 

const fs = require("fs");

// let f1readPromise = fs.promises.readFile("f1.txt");

// function readf2file(f1kadata) {
//   console.log(f1kadata + "");
//   let f2readPromise = fs.promises.readFile("f2.txt");
//   return f2readPromise;
// }

// function readf3File(f2kadata) {
//   console.log(f2kadata + "");
//   let f3readPromise = fs.promises.readFile("f3.txt");
//   return f3readPromise;
// }

// function alldone(f3kadata) {
//   console.log(f3kadata + "");
//   console.log("read all files serially ");
// }

// f1readPromise
//   .then(readf2file)
//   .then(readf3File)
//   .then(alldone)
//   .catch(function (err) {
//       console.log(err)
//   });


//q2. read 3 files f1.txt,f2.txt,f3.txt paralelly using promises

let f1p = fs.promises.readFile("f1.txt");
let f2p = fs.promises.readFile("f2.txt");
let f3p = fs.promises.readFile("f3.txt");

f1p.then(function cb(data) {
  console.log(data + "");
});

f2p.then(cb);
f3p.then(cb);

function cb(data) {
  console.log(data + "");
}
