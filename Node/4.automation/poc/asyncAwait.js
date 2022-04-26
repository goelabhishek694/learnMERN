//promises 
//chatur
function fp() { 
  return new Promise(function (resolve, reject) {
    resolve("hi");
  });
}

let promisifyFunc = fp();

promisifyFunc.then(function (data) {
  console.log(data);
});

promisifyFunc.catch(function (err) {
  console.log(err);
});

///using async keyword
//asaan bhasha  rancho 
async function f() {
  return "hello";
}

let asyncf = f();

asyncf.then(function (data) {
  console.log(data);
});

asyncf.then(alert);

//The keyword await makes JavaScript wait until that promise settles and returns its result.
//The function execution “pauses” at the line 44 and resumes when the promise settles, with "result" variable
//await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime.

async function f() {
  let promise = new Promise(function(resolve, reject){
      setTimeout(function () {
          resolve("done!")
      }, 5000);
  });

  let result = await promise; // wait until the promise resolves
  console.log("hello");
  alert(result); // "done!"
}
f();
console.log("YOLO");