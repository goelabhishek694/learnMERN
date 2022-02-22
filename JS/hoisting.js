console.log(a); //undefined 
greet();
console.log(hello);  
hello();
var a = 10;

// function
function greet() {
  console.log("hello pepcoders");
}
//function expression 
var hello = function () {
    console.log("you guys rock");
}

// hello();


// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables to the top of their scope, prior to execution of the code.


// my definiton
//we can access the variables and function even before we have declared it; //  hoisting 