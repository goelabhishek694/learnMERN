// deep copy 
    //4k->8k
let user= {
    name: "Abhi",
    address: {
        city: "New Delhi",
        state: "Delhi",
        zip: 110005,
        area: {
            houseno: 3456,
            block: 3,
            sector:6
        }
    }
}
    //5k->8k
// let newObj = obj;

// let newObj = JSON.parse(JSON.stringify(user));  
// //it cannot deep clone functions 

// console.log(user === newObj);

const deepClone = (user) => {
    let clonedObj = Object.assign({}, user); //shallow copy
    // iterate on each key of clonedObj
    Object.keys(clonedObj).forEach((key) => {
        let type = typeof user[key];
        if (type == 'object') {
            clonedObj[key] = deepClone(user[key]);
        }
        else {
            clonedObj[key] = user[key];
        }
    })
    //check if non primitive(obj) , we apply recursion to deep copy 
    return clonedObj;
}

let deepClonedObj=deepClone(user);


// user = {
//     hobbies: ["dance", "music", "coding"],
//     name: "Abhi",
    
// }


let user = {
    name: "abhi",
    age: 23,
    sayHi:()=>{
        console.log(this.name);
        console.log(user.name); 
    }
}

let admin = user;
user = null;
admin.sayHi();




