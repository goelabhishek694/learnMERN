//function calculator is a hof
function calculator(operator, a, b) {
  if (operator == "+") {
    return function add() {
      return a + b;
    };
  }
}
console.log("hello");
let fn = calculator("+", 3, 4);
var ans = fn();
console.log(ans);

//functional programming

const arr = [2, 5, 8, 6, 78];

// calculate the area of squares
let areaOfSquare = function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * arr[i]);
  }

  return res;
};

console.log(areaOfSquare(arr));

//calculate the perimeter of square

let perimeterOfSquare = function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(4 * arr[i]);
  }

  return res;
};

console.log(perimeterOfSquare(arr));

//calculate the diagonal of square

let diagonalOfSquare = function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(Math.sqrt(2) * arr[i]);
  }
  return res;
};

console.log(diagonalOfSquare(arr));

//better way
let area = function (a) {
  return a * a;
};

let perimeter = function (a) {
  return 4 * a;
};

let diagonal = function (a) {
  return Math.sqrt(2) * a;
};

let calculate = function (arr, logic) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(logic(arr[i]));
  }

  return res;
};

console.log(calculate(arr, area));
console.log(calculate(arr, perimeter));
console.log(calculate(arr, diagonal));

//map
//write a code to calculate area of square

let res = arr.map((a) => {
  return a * a;
});

console.log(res);

//filter
// write a code to return an array of even numbers

let evenNum = arr.filter((num) => {
  return !(num % 2);
});
console.log(evenNum);

//reduce
// write a code to get sum of arr

let sumOfArr = arr.reduce((acc, num) => {
  console.log("acc: ", acc);
  console.log("num: ", num);
  acc = acc + num;
  return acc;
});

console.log(sumOfArr);



//write a code to calculate largest element in arr
const ar = [-2, -5, -8, -6, -78]; 
//output -> -2

function largestElement(max, cur) {
  if (cur > max) {
    max = cur;
  }
  return max;
}

var ans = ar.reduce(largestElement,-Infinity);
console.log(ans);


var users = [
  { firstName: "Mayank", lastName: "Singh", age: 55 },
  { firstName: "Jyoti", lastName: "Jauhari", age: 25 },
  { firstName: "Saket", lastName: "Bharti", age: 15 },
];

//write a code to get fullName of all the users
// output-> ["Mayank Singh", "Jyoti Jauhari", "Saket Bharti"]

function getFullName(obj) {
  return obj.firstName + " " + obj.lastName;
}

var ans = users.map(getFullName)
console.log(ans);

console.log(users.map((obj)=> obj.firstName+" "+obj.lastName));



//write a code to return the number of people with a particular age
// output-> {55:1,25:1,15:1}
//"bees in the knees"
function peopleAge(robj, cobj) {
  let age = cobj.age;
  if (robj[age]) {
    robj[age] = robj[age] + 1;
  }
  else {
    robj[age] = 1;
  }

  return robj;

}

var obj = users.reduce(peopleAge, {}); 
console.log(obj);


//write a code to get firstName of all the users with age less than 30
// output-> [ "Jyoti Jauhari", "Saket Bharti"]


// hint : map and filter use hoga 
var ans = users.filter((obj) => obj.age < 30)
console.log(ans);
var ans = ans.map(getFullName);
console.log(ans);

console.log(
  users.filter((obj) => obj.age < 30)
    .map(getFullName)
);

//using reduce
function getPeopleLessThan30(arr, obj) {
  if (obj.age < 30) {
    arr.push(obj.firstName + " " + obj.lastName);
  }
  return arr;
}

var ans=users.reduce(getPeopleLessThan30,[]);
console.log(ans);


// console.log(calculate(arr, area));

// console.log(arr.calculate(area));
console.log(arr.map(area));

//implementation of our own map 
Array.prototype.myMap = function (logic) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(logic(this[i]));
  }
  return res;
}
var narr = [1, 2, 3, 4];
var ans = narr.myMap(area);
console.log(ans);

var ans = narr.myMap(function (num) {
  return num * 3;
});
console.log(ans);

Array.prototype.mySize = 8;
console.log(narr.mySize);









