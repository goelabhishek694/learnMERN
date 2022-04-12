// fs-> file system module -> it helps us to make files/folders append data in them , delete data , read data 
const fs = require("fs");//require("path_of_the_file");
// console.log(fs);
// const f1 = require("./f1.txt");
const obj = require("../../../JS/temp");
//require method , goes to the file that is needed to be required. executes that file. and if there is something that is exported we get that in variable 'abc'
console.log(obj);
let ans = obj.add(45, 4);
console.log(ans);


// console.log(fs);
// appendfilesync appends data into a file , if file is not present, it creates the file and then appends the data
                // file path // data to be appended
fs.appendFileSync("f1.txt", "Hello i am f2 file");
fs.appendFileSync("f1.txt", "\nYou guys are smart");
// console.log(res);

let data = fs.readFileSync("f1.txt");
//data recieved is an object type , data is in buffer format. For it to be readbale , we convert it from buffer to string . 
console.log(data+""); //automatic type conversion se buffer string mein conver tho gayi h 

// let data = fs.readFileSync("f1.txt", "utf-8");
// console.log(data);