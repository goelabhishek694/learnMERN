// let randomValue = { name: "Lydia" };
// randomValue = 23;

// if ( !typeof randomValue === "string") {
//   //false -> boolean === string
//   console.log("It's not a string!");
// } else {
//   console.log("Yay it's a string!");
// }

// // // type of operator returns value in string // "Number"a

// var user = {
//   email: "my@email.com",
//   updateEmail: function (email) {
//     //parameter
//     this.email = email; //user.email = "new@email.com";
//   },
// };

// user.updateEmail("new@email.com"); //argument
// console.log(user.email);

// const fruit = ["🍌", "🍊", "🍎"];

// fruit.slice(0, 1);//(startIdx,endIdx)
// // does not change in the orginal array/object
// fruit.splice(0, 1);
// fruit.unshift("🍇");

// console.log(fruit);

// let count = 0;
// const nums = [0, 1, 2, 3];


// for (var i in nums) {
//     if (i) {
//         count += 1;
//     }
// }

// console.log(count);

// Which of the options result(s) in an error?

// const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ emojis = [...emojis, '🥂']; 
// /* 4 */ emojis.length = 0;

// console.log(emojis);


// const add = function (x) {
//   return x + x;
// };

// function myFunc(num=2, value = add(num)) {
//   console.log(num, value);
// }
//     //num value
// myFunc(3, 34);
// myFunc(3);
// myFunc();



// 2 4
// 3 6


// const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];
// console.log(emojis);
// emojis.length = 0;
// console.log(emojis.length);
// console.log(emojis);
// // ans array jiske andar emojis arrray ki values ho aur "🏑"
// // for (emojis ki value)
// //     push kru ans array mein 
// var ans = [...emojis, "🏑"];
// console.log(emojis);
// console.log(ans);
// emojis.length = 0;


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; 
//                           //start-> incusive end->exclude 
// const citrus = fruits.slice(1);
// console.log(fruits);
// console.log(citrus);


//splice 
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; 
// fruits.splice(1, 3,"Grapes","Pear","Watermelon","Muskmelon","Kiwi");
// fruits.unshift("0th");
// console.log(fruits);
// start  
// count
// replace  

// Which of the following will modify the person object?
// const person = {
//   name: 'Lydia Hallie',
//   address: {
//     street: '100 Main St',
//   },
// };

// Object.freeze(person);
// //properties cannot be added, deleted and modified 
// // only freezez array at level one 
// // shallow freeze 
// person.name = "Suresh";
// // delete person.address;
// person.address.street = "101 Main St";
// person.pet = { name: "Mary" };
// console.log(person);


// const person = {
//     name: "Abhishek"
// };

// // Object.seal(person);
// //properties cannot be added, deleted but can be modified

// //  person.name = "Suresh";
// //  person.age = 21;
// //  delete person.name;

// const info = {
//     age: 21,
//     fruits: ["Apple", "Orange"],
//     isMale: true,
// };
//             //target //source
// Object.assign(person, info);
// // const person = {
// //     name: "Abhishek",
// //   age: 21 };

// console.log(person);


// const emojis = ["🥑", //0th level 
//     ["✨", "✨",      //1st level 
//         ["🍕", "🍕"] //2nd level starts and ends
//     ]//1st level ends 
// ]; //0th evel ends 

// console.log(emojis.flat(Infinity)); //default value is one

// ["🥑", "✨", "✨", "🍕", "🍕"];
// //concatenate-> 2 cheezo ko jodna 

// // 8 - 10 level deep 

// console.log(typeof Infinity);


// const randomValue = 21;

// function getInfo() {
//   console.log(typeof randomValue);
//     var randomValue = "Lydia Hallie";
//     // console.log(randomValue);
// }

// getInfo();


// const groceries = ['banana', 'apple', 'peanuts'];

// if (groceries.indexOf('banana')) {
// console.log('We have to buy bananas!');
// } else {
// console.log(`We don't have to buy bananas!`);
// }
// ?-> agar aage waali property h to value acces kr lunga nhi to undefined return kr dunga 

// const person = {
//   firstName: "Lydia",
//   lastName: "Hallie",
//   pet: {
//     name: "Mara",
//     breed: "Dutch Tulip Hound",
//   },
//   getFullName:function getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.pet?.name); //mara 
// console.log(person.pet?.family?.name);  //undefined 
// console.log(person.getFullName?.()); //lydia hallie 
// console.log(member.getLastName?.()); //refference error

// let num = 1;
// const list = ["🥳", "🤠", "🥰", "🤪"];

// console.log(list[(num += 1)]);

// function sumValues(x, y, z) {
//   return x + y + z;
// }

// console.log(sumValues([...[1, 2, 3]])); 


// let arr = [1, 2, 3];
// console.log([...[1, 2, 3]]);

// x -> point kia person object ko 
// const person = {
//   name: 'Lydia',
//   age: 22,
// };

// x = {
//   name: "Sarah",
//   age: 22,
// };

// const person = {
//   name: "Lydia",
//   age: 21,
// };

// const changeAge = function (x = { ...person }) {
//   x.age += 1;
// };
// const changeAgeAndName = function (x = { ...person }) {
//   x.age += 1;
//     x.name = "Sarah";
//     console.log(x);
// };

// changeAge(person);
// console.log(person);
// changeAgeAndName();

// console.log(person);

// const food = ["🍕", "🍫", "🥑", "🍔"];
// const info = { favoriteFood: food[0] };

// info.favoriteFood = "🍝";

// console.log(food);

// const colorConfig = {
//   red: true,
//   blue: false,
//   green: true,
//   black: true,
//   yellow: false,
// };

// const colors = ["pink", "red", "blue"];

// console.log(colorConfig.red);



// function nums(a, b) {
//   if (a > b) console.log("a is bigger");
//   else console.log("b is bigger");
//   return // return statement ke baad waala line execute nhi hta 
//   a + b;
// }

// console.log(nums(4, 2)); 
// console.log(nums(1, 2));

// const person = {
//   name: "Lydia",
//   age: 21,
// };

// for (const [x, y] of Object.entries(person)) {
//   console.log(x, y);
// }


// let newList = [1, 2, 3].push(4); //[1,2,3,4]
// // -> push method returns arr.length 
// // newlist will be equal to 4
// console.log(newList); 
// console.log(newList.push(5)); //error dega


// console.log("I want pizza"[10]);

// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young.";
//   } else {
//     const message = "Yay! You're old enough!";
//   }

//   return message;
// }

// console.log(checkAge(21));

// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);

// console.log(3 + 4 + "5");

// const person = {
//   name: "Lydia",
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

var num = 8;
var num = 10;

console.log(num);