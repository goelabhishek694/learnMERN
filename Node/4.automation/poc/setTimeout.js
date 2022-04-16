// function yolo() {
//     var a = 10;
//     function cb(err, res) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("hello how are you ?");
            
//         }
//     }
//     // function to be executed(callback fun) , time(ms) after which cb to be executed
//     // 1 second =1000 milli second
//     setTimeout(cb, 5000);
//     console.log(a);

// }

// yolo();
// let b = 100;
// console.log(b);

// const request = require("request");
// let url ="https://www.worldometers.info/coronavirus/"
// function yolo() {
//     var a = 10;
//     function cb(err, res,body) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("hello how are you ?");
//             console.log("statusCode is ",res.statusCode);
//         }
//     }
//     // function to be executed(callback fun) , time(ms) after which cb to be executed
//     // 1 second =1000 milli second
//     request(url,cb)
//     console.log(a);

// }

// yolo();
// let b = 100;
// console.log(b);

// for (var i = 1; i <= 10; i++){
//     // hint: closures and scope -> wrapping
//     function outer(a) { //a=1
//         setTimeout(function () {
//             console.log(a);
//         }, 2000 * a);
//     }
    
//     outer(i);
// }

// for (var i = 1; i <= 10; i++) {
//   // hint: closures and scope -> wrapping
//     function cb(a) {
//       console.log(a);
//     };
//     setTimeout( cb, 2000 * i, i);
// }

// function a() {
//     let x = 100;
//     function y() {
//         return x;
//     }
//     return y;
// }

// let fn = a();
// let ans = fn();
// console.log(ans);

// let b = 1000;

// let i = 1;
// while (i <= 10) {
    
// }

// console.log("before");
// setTimeout(function () {
//   console.log("time over")
// }, 5000);
// console.log("after");


// fetch() api

console.log("before");
setTimeout(function () {
  console.log("time over");
}, 5000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response)
  {
    return response.json() // when a promise is returned, it creates a promise and then return it , which is obviously of fuflfilled state 
  })
  .then(function (json) {
    console.log(json)
  });
console.log("after");







