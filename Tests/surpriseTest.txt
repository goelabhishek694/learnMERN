// < --------------Question 1----------------->
155
let randomValue = { name: "Lydia" };
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It's not a string!");
}
 else {
  console.log("Yay it's a string!");
}

A: It's not a string!
B: Yay it's a string! -> Ans
C: TypeError
D: undefined

// < --------------Question 2----------------->

const user = {
	email: "my@email.com",
	updateEmail: function (email){
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)

A: my@email.com
B: new@email.com
C: undefined
D: ReferenceError

// < --------------Question 3----------------->
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)

A: ['🍌', '🍊', '🍎']
B: ['🍊', '🍎']
C: ['🍇', '🍊', '🍎']
D: ['🍇', '🍌', '🍊', '🍎']

// < --------------Question 4----------------->

let count = 0;
const nums = [0, 1, 2, 3]; 

for(var i in nums){
	if (i) count += 1
}

console.log(count)

A: 1
B: 2
C: 3
D: 4

// < --------------Question 5----------------->
Which of the options result(s) in an error?

const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;

A: 1
B: 1 and 2
C: 3 and 4
D: 3 

// < --------------Question 6----------------->
// for this ques read this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

const add = function (x) {
    return x + x;
}

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);

A: 2 4 and 3 6
B: 2 NaN and 3 NaN
C: 2 Error and 3 6
D: 2 4 and 3 Error

// < --------------Question 7----------------->
137
// for this question google what Object.freeze does 

Which of the following will modify the person object?
const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};

Object.freeze(person);

A: person.name = "Suresh"
B: delete person.address
C: person.address.street = "101 Main St" 
D: person.pet = { name: "Mara" }

// < --------------Question 8----------------->
136
// for this question google what Object.seal does 
Which of the following will modify the person object?
const person = { name: 'Lydia Hallie' };

Object.seal(person);

A: person.name = "Evan Bacon"
B: person.age = 21
C: delete person.name
D: Object.assign(person, { age: 21 })

// < --------------Question 9----------------->
// read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));
A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
B: ['🥑', '✨', '✨', ['🍕', '🍕']]
C: ['🥑', ['✨', '✨', '🍕', '🍕']]
D: ['🥑', '✨', '✨', '🍕', '🍕']

// < --------------Question 10----------------->

var randomValue = 21;

function getInfo() {
  console.log(typeof randomValue);
  var randomValue = 'Lydia Hallie';
  lo
}

getInfo();
A: "number"
B: "string"
C: undefined
D: ReferenceError

// < --------------Question 11----------------->

const add = function (x) {
    function inner (y) {
        function innermost (z) {
            console.log(x, y, z);
            return x + y + z;
        }
        innermost(6);
    }
    inner(5);
}

add(4);

A: 4 5 6
B: 6 5 4
C: 4 function function
D: undefined undefined 6

// < --------------Question 12----------------->
// read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
console.log('We have to buy bananas!');
} else {
console.log(`We don't have to buy bananas!`);
}

A: We have to buy bananas!
B: We don't have to buy bananas
C: undefined
D: 1

// < --------------Question 13----------------->
// read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

const person = {
  firstName: 'Lydia',
  lastName: 'Hallie',
  pet: {
    name: 'Mara',
    breed: 'Dutch Tulip Hound',
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());

A: undefined undefined undefined undefined
B: Mara undefined Lydia Hallie ReferenceError
C: Mara null Lydia Hallie null
D: null ReferenceError null ReferenceError

// < --------------Question 14----------------->

let num = 1;
const list = ['🥳', '🤠', '🥰', '🤪'];

console.log(list[(num += 1)]);
A: 🤠
B: 🥰
C: SyntaxError
D: ReferenceError

// < --------------Question 15----------------->
// read:https://www.w3schools.com/react/react_es6_spread.asp
function sumValues(x, y, z) {
  return x + y + z;
}
A: sumValues([...1, 2, 3])
B: sumValues([...[1, 2, 3]])
C: sumValues(...[1, 2, 3]) 
D: sumValues([1, 2, 3])

// < --------------Question 16----------------->
// revise default paramters and spread operator 
const person = {
  name: 'Lydia',
  age: 21,
};

const changeAge = function (x = { ...person }) {
  x.age += 1;
}
const changeAgeAndName = function (x = { ...person }) {
  x.age += 1;
  x.name = 'Sarah';
};

changeAge(person);
changeAgeAndName();

console.log(person);
A: {name: "Sarah", age: 22}
B: {name: "Sarah", age: 23}
C: {name: "Lydia", age: 22}
D: { name: "Lydia", age: 23 }

// < --------------Question 17----------------->

const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

// < --------------Question 18----------------->

const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.red);
A: true
B: false
C: undefined
D: TypeError

// < --------------Question 19----------------->

function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));

A: a is bigger, 6 and b is bigger, 3
B: a is bigger, undefined and b is bigger, undefined
C: undefined and undefined
D: SyntaxError

// < --------------Question 20----------------->
// read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
A: name Lydia and age 21
B: ["name", "Lydia"] and ["age", 21]
C: ["name", "age"] and undefined
D: Error

// < --------------Question 21----------------->

let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
A: [1, 2, 3, 4, 5]
B: [1, 2, 3, 5]
C: [1, 2, 3, 4]
D: Error

// < --------------Question 22----------------->
console.log('I want pizza'[0]);
A: """
B: "I"
C: SyntaxError
D: undefined

// < --------------Question 23----------------->

function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21));
A: "Sorry, you're too young."
B: "Yay! You're old enough!"
C: ReferenceError
D: undefined

// < --------------Question 24----------------->

const person = {
  name: 'Lydia',
  age: 21,
};

let city = person.city; //undefined
city = 'Amsterdam';

console.log(person);
A: { name: "Lydia", age: 21 }
B: { name: "Lydia", age: 21, city: "Amsterdam" }
C: { name: "Lydia", age: 21, city: undefined }
D: "Amsterdam"

// < --------------Question 25----------------->

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
A: { admin: true, user: { name: "Lydia", age: 21 } }
B: { admin: true, name: "Lydia", age: 21 }
C: { admin: true, user: ["Lydia", 21] }
D: { admin: true }

// < --------------Question 26----------------->

console.log(3 + 4 + '5');
A: "345"
B: "75"
C: 12
D: "12"

// < --------------Question 27----------------->

const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}

A: { name: "Lydia" }, { age: 21 }
B: "name", "age"
C: "Lydia", 21
D: ["name", "Lydia"], ["age", 21]

// < --------------Question 28----------------->

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
A: [1, 2, 3, 7 x null, 11]
B: [1, 2, 3, 11]
C: [1, 2, 3, 7 x empty, 11]
D: SyntaxError

// < --------------Question 29----------------->
33
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
A: undefined is 21 Lydia is 21
B: function function
C: Lydia is 21 Lydia is 21
D: Lydia is 21 function

// < --------------Question 30----------------->

var num = 8;
var num = 10;

console.log(num);
A: 8
B: 10
C: SyntaxError
D: ReferenceError