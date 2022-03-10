// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3  => displays the content of all files in terminal in concatinated form in given order
// 3) node wcat.js -n file1 file 2 file3 OR node wcat.js -n file1 
//node wcat.js f1.txt
//node wcat.js f1.txt f2.txt f3.txt
const fs = require("fs");
// let input = process.argv;
// console.log(input);
let inputArr = process.argv.slice(2);
console.log(inputArr);
let filesArr = [];
let optionsArr = [];
//===============> placed files path in filesArr <=============
for (let i = 0; i < inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    // console.log(firstChar);
    if (firstChar == '-') {
        optionsArr.push(inputArr[i]);
    }
    else {
        filesArr.push(inputArr[i]);
    }
}
// console.log("file to be read are " + filesArr);

//=============>check if all the files are present<============= //
for (let i = 0; i < filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if (!doesExist) {
        console.log("One or more File(s) do not exist ");
        return;
    }
}

// =============>content read and appending starts<=============//
let content = "";
for (let i = 0; i < filesArr.length; i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content = content + fileContent + "\n";
                     
}
console.log(content);

let contentArr = content.split("\n");
console.table(contentArr);

//check if -s is present or not
let isSPresent = optionsArr.includes("-s");
if (isSPresent) {
    for (let i = 1; i < contentArr.length; i++){
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        }
        else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    console.table(contentArr);
    let tempArr = [];
    //push everything in tempArr except null
    for (let i = 0; i < contentArr.length; i++){
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    console.log("data after removing extra lines\n",tempArr);
}

