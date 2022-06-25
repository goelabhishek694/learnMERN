// call,apply and bind are example of explicit binding 
let user = {
  firstName: "Kapil",
  lastName: "Dev",
  // welcome: function () {
  //     console.log(`Welcome ${this.firstName} ${this.lastName}`);
  // }
};
// user.welcome();

let welcome = function (email, mobileNumber, location) {
    console.log(`Welcome ${this.firstName} ${this.lastName} , 
    thank you for signing up! Your email id is ${email}
    Your registered number is ${mobileNumber}.
    Your location is ${location}
  `);
};



let user2 = {
  firstName: "Ravi",
  lastName: "Shastri",
};

//call method

//syntax -> function_name.call(obj_to_which_this_will_point);
//we want to print welcome message for Ravi Shastri

welcome.call(user2, "abc@gmail.com", 1234567890, "India");

//apply method
welcome.apply(user, ["abc@gmail.com", 1234567890, "India"]);

//bind method
let bindedFN = welcome.bind(user, "abc@gmail.com", 1234567890, "India");
console.log(bindedFN);
bindedFN();

let againBindedFN = bindedFN.bind(user2);
againBindedFN();


//new binding

function Name(firstName, lastName) {
  this.firstName = firstName;
  this.lastName=lastName;
}

var newObj = new Name("Sunil", "Gavaskar");
// js create a new obj in the bg, and passes its refference to the function 
// and then the refference is returned
// this -> {}
// {
//   firstName: "Sunil",
//   lastName:"Gavaskar"
// } 

// newObj = {
//    firstName: "Sunil",
//   lastName:"Gavaskar"
//  }

console.log(newObj);


//question

function fun() {
  console.log(this.name || "name is not defined");
}

var obj = {
  name:"Yashpal Sharma"
}

var bindedFn = fun.bind(obj);
bindedFn();

var againBindedFn = new bindedFn();


//writing polyfill for bind

let car = {
  name:"Thar",
  brand: "Mahindra"
}

let welcomeCar = function (date,money) {
  console.log(`I bought a new ${this.brand} ${this.name} 
  on ${date} for ${money} INR`);
}

let welcomingMyCar = welcomeCar.bind(car,"25th June","20lacs");
welcomingMyCar();


Function.prototype.mybind = function (...args) {
  // this->welcomeCar
  let fnObj = this;
  console.log(fnObj);
  let params = args.slice(1);
  console.log(params);
  return function () {
    fnObj.apply(args[0],params);
  };
}

let myWelcomingMyCar = welcomeCar.mybind(car,"25th June","20lacs",);
myWelcomingMyCar();





















