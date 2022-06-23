var arr = [];
var obj = {};
function abc() {
    console.log("you only live once");
}

console.log(arr.__proto__);
console.log(Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(obj.__proto__);

console.log(abc.__proto__);
console.log(abc.__proto__.__proto__);

console.log(obj.__proto__.__proto__);

let user = {
  name: "Abhishek",
  sayHi: function () {
    console.log(this.name);
  },
};

let admin = {
  role: "admin",
  age: 30,
};

admin.name;

Array.prototype.calculate = 34;

let arr = [];
arr.__proto__;

admin.__proto__ = user;
admin.name;
admin.sayHi();

admin.name = "Abhi";
admin.name;
admin.sayHi();

user.name;