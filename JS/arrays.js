// Array-> is a collections of elements 

let cars = ['BMW', "AUDI", "MG", 1, 2, 3, true];
// in JS you can store different values of different types in an Array
console.log(cars);

//accesing the elemnts of an array 
console.log(cars[0]);
console.log(cars[3]);

//replacing elemnts in array
cars[3] = "Mahindra";
console.log(cars[3]);

//ading elements in an array
cars[7] = "Honda";
console.log(cars);

// Methods of an array

// 1) pop method -> this method removes the element form the last of  array

cars.pop();
console.log("after popping the element\n" + cars);

// 2) push method -> it pushes a new Element at then end of array
cars.push("TATA");
console.log("after pushing an element");
console.log(cars);


// 3) unshift method-> this adds element at the starting of array
cars.unshift("JLR");
cars.unshift("Mustang");
console.log(cars);

// 4) shift method-> it removes Element from 0th index of array
cars.shift();
cars.shift();
console.log(cars);


console.log(cars.length);

// 2d array

let array2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(array2d);
console.table(array2d);
console.log(array2d[1][2]);
