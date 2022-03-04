// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     inner();
// }
// outer();

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

var z = outer();
// console.log(z + "");
// // function inner() {
// //   console.log(a);
// // }

z();



// let a;
// a = 10;
// const c;
// const c = 10;


