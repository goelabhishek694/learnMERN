// spread operator
// it is used to split up arr element or object properties

const nums = [1, 2, 3];
// const newNums = [...nums, 4];
const newNums = [nums, 4];
console.log(newNums); //[[1,2,3],4]

const oObj = {
    name: "Mohit",
    age:23

}
const nobj = { ...oObj, age: 32 };
console.log(nobj);
console.log(oObj);

//rest operator
// used to merge a list of function arguments into an array

function fun(...args) {
    console.log(args);
    console.log(typeof args);
    args.forEach(arg => {
        console.log(arg);
    });
}

fun("hello", "how", 2, true);
