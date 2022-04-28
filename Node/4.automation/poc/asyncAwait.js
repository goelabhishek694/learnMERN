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
//await waits for promise settlement so, it means it takes care of both .then and .catch

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


async function showAvatar() {
  // read our JSON
    let response = await fetch("https://javascript.info/article/promise-chaining/user.json");
    console.log(response);
  let user = await response.json();
    console.log(user);
  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();

//try catch finally 
try {
  console.log("in try");
} catch (e) {
  console.log(e);
} finally {
  console.log("i am always executed");
  console.log("ditto :)");
}

try {
  throw new Error("gadbad ho gayi");
} catch (e) {
  console.log(e);
} finally {
  console.log("i am always executed");
  console.log("ditto :)");
}