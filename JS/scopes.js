function outer() {
    inner();
    function inner() {
        console.log(b);
    }
}
var b = 10;
outer();
console.log(b);