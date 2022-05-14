//set data
localStorage.setItem("name", "Abhishek");
localStorage.setItem("lastName", "Goel");
localStorage.setItem("Stream", "CSE");
localStorage.setItem("place", "Delhi");
localStorage.hobby = "reading";

//getData
let data = localStorage.getItem("name");
let data1 = localStorage.name;
console.log(data);
console.log(data1);

//delete / remove data
let a = localStorage.removeItem("name");
delete localStorage.name;

// length of local storage 
let l = localStorage.length;
console.log(l);

//getKey by index
let d = localStorage.key(1);
console.log(d);
