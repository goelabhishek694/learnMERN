
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
let ans = fn();
console.log(ans);

//functional programming

const arr = [2, 5, 8, 6, 78];

// calculate the area of squares
let areaOfSquare = function (arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++){
        res.push(arr[i] * arr[i]);
    }

    return res;
}

console.log(areaOfSquare(arr));

//calculate the perimeter of square 

let perimeterOfSquare = function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(4* arr[i]);
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
}

let perimeter = function (a) {
    return 4 * a;
}

let diagonal = function (a) {
    return Math.sqrt(2) * a;
}

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
    return acc + num;
});
   
console.log(sumOfArr);






