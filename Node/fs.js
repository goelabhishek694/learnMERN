// fs-> file system module -> it helps us to make files/folders append data in them , delete data , read data 
const fs = require("fs");//require("path_of_the_file");
// const f1 = require("./f1.txt");
const abc = require("../JS/temp");
console.log(abc);


// console.log(fs);
// appendfilesync appends data into a file , if file is not present, it creates the file and then appends the data
let res = fs.appendFileSync("f1.txt", "Hello i am f2 file");
fs.appendFileSync("f1.txt", "\nYou guys are smart");
// console.log(res);

let data = fs.readFileSync("f1.txt");
console.log(data+"");

// let data = fs.readFileSync("f1.txt", "utf-8");
// console.log(data);