// entry point of my command line 

let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) {
    case "tree":
        //call tree function
        break;
    case "organize":
        //call organize function
        break;
    case "help":
        //call help function
        break;
    default:
        console.log("command not recognized :/")
        break;
}