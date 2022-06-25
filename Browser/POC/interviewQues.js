// //1st ques
// let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
// //output {1: 4, 2: 2, 3: 1, 4: 2, 5: 1, 6: 1}
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[arr[i]] = obj[arr[i]] == undefined ? 1 : obj[arr[i]] + 1;
// }
// console.log(obj);

// let Obj = {
//     name: "Abhishek",
//     age: 30,
//     email: "talk2me@gmail.com",
//     phone:undefined
// };

// console.log(Obj.email); // 
// console.log(Obj.ac); //undefined
// console.log(Obj.phone); //will think phone property does not exists
// console.log("phone" in Obj); //true 

// for (key in Obj) {
//     console.log(key);
//     console.log(Obj[key]);
// }

// let user={
//     name:"Abhi",
//     age:30
// }
// let clone={};

// Object.assign(clone,user);
// //{name: 'Abhi', age: 30}
// clone
// //{name: 'Abhi', age: 30}
// clone.name = "Abhishek"
// Object.assign(clone, user, { name: "Abhishek Goel" }); //replace the name propert
// Object.assign(clone, user, { fullName: "Abhishek Goel" }); //adds fullName property


// //deep clone 

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };
// let clone = {};
// //this is not deep cloning , because refference to size identifier is same in both clone and user obj 
// Object.assign(clone, user);
// console.log(clone);
// clone.name = "ABHISHEK";
// console.log(clone);
// clone.sizes.height = 123;
// console.log(clone);
// console.log(user);

// //flatten an Object 

// let flattenedObj={ 
//   "name": "Jhon",
//   "sizes.height" : 182,
//   "sizes.width":50
// }
// //it only deep clones the properties in an obj and not the method 
// JSON.stringify()

// const c = 20;
// c = 23; //error

// const user1 = #f45d3 
// #f45d3 ->
// {
//   name: "Abhi",
//   age: 30,
//   email:"talk2me@gmail.com"
// }

// user.name = "Abhi";
// console.log(user);


// let user = {
//   name: "Abhishek",
//   sayHi() { 
//     console.log(this.name);
//   }
// }

// let admin = user;

// user = null;
// user.sayHi();

// admin.sayHi();
//<----- rules---->
  //1. The value of this is evaluated during the run-time, depending on the context.
  //2. t
// this interviewques types

//1 
//default binding
function type1() {
  console.log(this.name);
}

var name = "JS";

type1();  //globally , this -> window , 

//2

function type2() {
  console.log(this.lname);
}

var lname = "Kumar";

var obj = {
  lname: "Verma",
  type2
}
//implicit binding 
obj.type2();//in execution context of function, 'this' gives reference to the obj


//3

var food = "Pizaa";

var obj = {
  food: "Pasta",
  eat() {
    console.log("i am eating " + this.food);
  }
}

var foo = obj.eat;

foo();


//4

var length = 1;
function square() {
  // let length = 1;
  let cb = function () {
    console.log(this.length * this.length);
  };
  setTimeout(cb, 2000);
}

var obj = {
  length: 3,
  square,
};

obj.square();

// 'use strict'

// var z;
// console.log(z); 

// y = 10;
// console.log(y); //10 

// console.log(x); //error , because memory is allocated on variable declaration , but in this cases variable has not been declsred , intilaized 
// x = 6;  


// function sayHi() {
//   //undefined in case of node, "" in case of browser (non strict )
//   // strict mode-> error in both the cases
//   console.log(this.name); 
// }
// sayHi();



let fruits = ["apple", "pear"];
fruits[5] = "watermelon";
console.log(fruits[3]);
fruits.age = 34;
console.log(fruits.length);
fruits[7] = "fre";
console.log(fruits.length);
fruits.year = "2022";
console.log(fruits.length);
fruits.month = "2022";
fruits[2] = "banana";
console.log(fruits);
fruits.abc = "xyz";
console.log(fruits);
fruits.length = 4;

// destructuring

let name = ["fjp5", "dev101", "pep"];
let [batchName, subj] = name;
console.log(batchName);
let [, , place] = name;



let user = {
  name: "John",
  age: 30,
};

// loop over keys-and-values
for (let details of Object.entries(user)) {
  console.log(details[0]); // name:John,
  console.log(details[1]); //age:30
}

for (let [key,value] of Object.entries(user)) {
  console.log(key); // name:John,
  console.log(value); //age:30
}

// interview ques
// swap 2 numbers without using temp variable
let num1 = 10;
let num2 = 20;

[num2, num1] = [num1, num2]
console.log(num1);
console.log(num2);
// [20.10]

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;


// let name = ['Hi', [ 'ki','llo'],'yu']
// let [a,b,c] = name;
// in this example i'm getting 
// a = 'H'
// b = 'i'
// c = ','

//defsult values
let family = ["mummy"];
let [mom, dad="papa"] = family;
console.log(mom);
console.log(dad);

function add(x, y=0) {
  return x + y;
}

let ans = add(4, 5);
let a = add(6);

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
//variable names should match that of object , order of writing those variables do not matter 
// let { title, width, height } = options;
let { width, height, title } = options;
console.log(title);
console.log(width);
console.log(height);

// let { width: sonu, height: monu, title: raju } = options;
console.log(sonu);
console.log(monu);
console.log(raju);

let { width=200, height: monu, title: raju , name="Ajvinder"} = options;



let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);   //100

if() { 
  jrbverfcwed
  redws
  refdws
}

let title, width, height; //->same as let title; let height; let width;

// error in this line
({ title, width, height } = { title: "Menu", width: 200, height: 100 });


// sort an arr using setTimeout

const ar = [10, 20, 1, 5, 8, 50, 100];
//desired output-> 1,5,8,10,20,50,100

for (let num of arr) {
  setTimeout(() => console.log(num), num);
}
