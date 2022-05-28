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


let user = {
  name: "Abhishek",
  sayHi() { 
    console.log(this.name);
  }
}

let admin = user;

user.sayHi();
user = null;
admin.sayHi();


