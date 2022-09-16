const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = {
    "pink": 1,
    "red": 2,
    "blue": 3,
};

console.log(colorConfig?.colors?.pink); 

// colorConfig.colors-> ud[1]-> error  


class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange")); 
// this->{newColor:"purple"}

// 66. With which constructor can we successfully extend the `Dog` class?
class Dog {
  constructor(name) {
    this.name = name;
  }

  eats() {
    console.log("dog is eating pedigree");
  }
};

class Labrador extends Dog {
  // 1 
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.eats();
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4 
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};

// Question What is the output
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;

// Question:
console.log(Number(2) === Number(2)) //true
console.log(Boolean(false) === Boolean(false)) //true 
console.log(Symbol('foo') === Symbol('foo')) //false

function getPersonInfo(one, two, three) {
  console.log(one); 
  console.log(two); //rasel
  console.log(three); //21
}
const person = "Rasel";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
            //OR
getPersonInfo(["","is","years old"], person, age);




// Ques:
function addToList(item, list) {
  return list.push(item); //length of arr
}
//add methods return length . remove methods returns ele removed
const result = addToList("apple", ["banana"]);
console.log(result); //2  ["banana","apple"]

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const Rasel = new Person("Rasel", "Kazi"); Rasel,this->{}
const sarah = Person("Sarah", "Smith");

console.log(Rasel); //{fn:r , ln:k}
console.log(sarah); //ud

//Question
// 85. What kind of information would get logged?
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))

Options
The result of the `fetch` method.
1
The result of the second invocation of the `fetch` method.
2
The result of the callback in the previous `.then()`.
3
It would always be undefined.
4

// Question:
let newList = [1, 2, 3].push(4)  //4

console.log(newList.push(5)) //error

function checkAge(data) { 
  if (data === { age: 18 }) { //dt, value->ref
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 }); //Hmm.. You don't have an age I guess


//Output?
function giveRaselPizza() {
  return "Here is pizza!"
}

const giveRaselChocolate = () => "Here's chocolate... now go hit the gym already."

console.log(giveRaselPizza.prototype) //obj
console.log(giveRaselChocolate.prototype) //ud

//Output?
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange") //Rest parameter must be last formal parameter 

const a = {};
const b = { key: "b" }; 
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); //456

function nums(a, b) {
  if
  (a > b)
  console.log('a is bigger')
  else 
  console.log('b is bigger')
  return 
  a + b
}

console.log(nums(4, 2)) //a is bigger , ud
console.log(nums(1, 2))//'b is bigger', ud

const person = {
	name: "Rasel Kazi",
	hobbies: ["coding"]
};

function addHobby(hobby, hobbies = person.hobbies) {
	hobbies.push(hobby); 
	return hobbies; 
}

addHobby("running", []); 
addHobby("dancing");
addHobby("baking");

console.log(person.hobbies); //["coding",dancing,"baking"]

Output?
const one = (false || {} || null) //{}
const two = (null || false || "") //""
const three = ([] || 0 || true) //[]

console.log(one, two, three)
  
//output


const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// output?
console.log(`${(x => x)('I love')} to program`) //'i love to program'
  
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x); //1
  }
  console.log(x); //ud
  console.log(y); //2
})();

const name = "Rasel"; //false const,let,var
age = 21; //true

console.log(delete name);
console.log(delete age);

const person = {
  name: "Rasel",
};

Object.defineProperty(person, "age", { value: 21 });

console.log(person); //{name: "Rasel",
  //"age": 21 }
console.log(Object.keys(person)); //name

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2)); //x.number=x.number*2
};

multiply(); //x={number:10} 20 {number:20}
multiply(); //20
multiply(value); //{ number: 10 } //20 {number:20}
multiply(value);//40 {number:40}
multiply(value) //80


class Bird {
	constructor() {
    console.log("I'm a bird. 🦢");
	}
}

class Flamingo extends Bird {
	constructor() {
    console.log("I'm pink. 🌸");
		super(); 
	}
}

const pet = new Flamingo();


const getList = ([x, ...y]) => [x, y] //[1,[2,3,4]]
const getUser = (user) => {
  return {
    name: user.name,
    age : user.age
  } 
}
const list = [1, 2, 3, 4]
const user = { name: "Rasel", age: 21 }

console.log(getList(list))
console.log(getUser(user))


const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`

//Question

//Question
const handler = {
	set: () => console.log("Added a new property!"),
	get: () => console.log("Accessed a property!")
};

const person = new Proxy({}, handler);

person.name = "Rasel";
person.name;
person.name = "Rasel";
person.name;

const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))

function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat(
    'en-US',
    { style: 'unit', unit: 'mile-per-hour' }
  ).format(speed)

  const formattedAmount = new Intl.NumberFormat(
    'en-US',
    { style: 'currency', currency: 'USD' }
  ).format(amount)

  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`
}

console.log(getFine(130, 300))

//output?
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;//{10:20}
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10)); //Calculated 20
console.log(addFunction(10)); //From cache! 20
console.log(addFunction(5 * 2)); //From cache! 20

//ques
// What will happen
let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null
// options
// 1.The `setInterval` callback won't be invoked

// 2.The `setInterval` callback gets invoked once

// 3.The `setInterval` callback will still be called every second<-ans

// 4.We never invoked `config.alert()`, config is `null`

//output?
// counter.js
let counter = 10;
export default counter;

6. Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?


function getName(name) {
  const hasName = //
}

// 1)`!!name`
// 2) `name` 
// 3)`new Boolean(name)` -> ans
// 4)`name.length`



// i/p->arr = [1, 5, 0, 0, 3, 0, 8, 0, 9]
// o/p->arr=[1,5,3,8,9,0,0,0,0]

newArr = arr.filter( x => x > 0)
zeroes = Array(arr.length - newArr.length).fill(0)
newArr = newArr.concat(zeroes)

// dsa
// 1 -> brute force. tc->O(n) sc->O(n);
// 2 -> two pointer approach tc->O(n);

// it shoudl work 
// then syntax 
// then optimize 

// longest substring unique char  leetcode 3 
// str="babdcad"
// ans="bdca"

// generate all substrings of str 
// loop check ki uske car unique ? if unique length ? 

//hashSet

// two sum  leetcode 2 ,1 
//3 sum and 4 sum 



