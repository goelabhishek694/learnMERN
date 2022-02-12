// 3 types of function

//1) Normal Function

//function definiton
// function function_name(param1, param2) {
    //do something
// }

// function invoke
// function_name(arg1, arg2);

// function add(a, b) {
//     console.log( a + b);
// }


// add(2, 6);

// functions are treated as first class citizens in Javascript
//  -> functions can be returned 
//  -> functions can be passed as parameters/argument
//sub mult div 
function calculator(str,a,b) {
    if (str == 'add') {
        return function add() {
            console.log( a + b);
        }
    }
    // else if (str == 'sub') {
        
    // }
}
let returnedFunc = calculator('add', 2, 3);
// console.log("returned function is\n" + returnedFunc);
// returnedFunc();




// 2) Function Expression

// let variable_name = function () {
//     // do something
// }
// name of variable is ised to invoke the funciton
// variable_name();

let sayHi=function () {
    console.log("hello guys is am function expression");
}

let sayBye = function () {
  console.log("bye guys");
};

console.log("line 57\n" + sayHi);
// sayHi();
console.log("line 59\n" + sayBye);
// sayBye();
//abcd(); // error abcd is not defined


// 3) IIFE-> Imediately invoke function expression

function add(a, b) {
    return a + b
}
let a = add(2, 3);
// a = 5;
console.log(a);

let additionIIFE = (function (a, b) {
  console.log(a + b);
})(20, 30);

// console.log(additionIIFE);
// console.log(additionIIFE(20, 30));

