//default imports
import obj from './temp';
import yolo from "./temp";

console.log(obj);
console.log(yolo);

//named imports
import { key as haathi } from './strings';
import { exportedObj } from "./strings";
     //all
import * as bundled from './strings';
bundled.key;
bundled.exportedObj;


// bundled = {
//   key: "SHA-23402340",
//   exportedObj: {
//     name: "Abhishek",
//     age: 32,
//   },
// };





