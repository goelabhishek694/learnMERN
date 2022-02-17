// Javascripts objects are always in key value pair 

let obj = {};  //empty object
console.log(obj);

let person = {
    //key : value 
    name: "Abhishek",
    age: 28,
    phone: 9999999999,
    gender: "Male",
    height: "170cm"
};

console.log(`Hey ${person.name}, thank you for signing up !`);
console.log(person.gender);
console.log(person["gender"]);

let str = "Hello";
console.log(str.length); //dot notation
console.log(str["length"]); //square bracket notation

//nesting of objects
let captainAmerica = {
    firstName: "Steve",
    lastName: "Rogers",
    friends: ["Bucky", "Tony Stark", "Brue Banner"],
    age: 102,
    isAvenger: true,
    address: {
        state: "Manhattan",
        city: "New York",
        country: "USA"
    },
    sayHi: function () {
        console.log(`Hello my name is ${this.firstName}`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
console.log(captainAmerica.sayHi()); //method accessing 



// methods-> objects ke andar function
// console.log(str.toUpperCase());