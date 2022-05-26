//1st ques
let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
//output {1: 4, 2: 2, 3: 1, 4: 2, 5: 1, 6: 1}
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] == undefined ? 1 : obj[arr[i]] + 1;
}
console.log(obj);

let Obj = {
    name: "Abhishek",
    age: 30,
    email: "talk2me@gmail.com",
    phone:undefined
};

console.log(Obj.email); // 
console.log(Obj.ac); //undefined
console.log(Obj.phone); //will think phone property does not exists
console.log("phone" in Obj); //true 

for (key in Obj) {
    console.log(key);
    console.log(Obj[key]);
}

//2nd ques


