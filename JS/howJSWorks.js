var num = 5;
function cube(num) {
  var res = num * num * num;
  return res;
}
var ans1 = cube(num);
var ans2 = cube(10);
var ans3 = cube();

console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log("" + cube);

console.log(undefined * 5 * undefined);
