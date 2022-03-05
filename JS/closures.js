// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     inner();
// }
// outer();

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }

// var z = outer();
// // console.log(z + "");
// // // function inner() {
// // //   console.log(a);
// // // }

// z();



// let a;
// a = 10;
// const c;
// const c = 10;

function outer() {
  var a=7;
  function inner(){
    console.log(a);
  }
  a = 10;
  return inner;
}

var c = outer();
console.log(c);
c();

const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ["pink", "red", "blue"];
//left to right in a line and top to bottom in a file 
console.log(colorConfig.colors[1]);
