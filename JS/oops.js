// class Penguin{
//     constructor() {
//         this.habitat = "Antartica";
//     }

//     printPlaceOfOrigin() {
//         console.log(this.habitat);
//     }
// }

// const myPenguin = new Penguin();
// console.log(myPenguin);
// myPenguin.printPlaceOfOrigin();

//inheritance (extends keyword)
// class LivingOrganism{
//     constructor() {
//         this.breaths=true;
//     }

//     isBreathing() {
//         console.log(this.breaths);
//     }
// }

// class Bird extends LivingOrganism{
//     constructor() {
//         super();
//     this.eats = true;
//   }

//   printHabit() {
//     console.log(this.eats);
//   }
// }

// class Penguin extends Bird {
//     constructor() {
//         super(); // used to run the constructor of parent
//     this.habitat = "Antartica";
//   }

//   printPlaceOfOrigin() {
//     console.log(this.habitat);
//   }
// }

// const myPenguin = new Penguin();
// console.log(myPenguin);
// myPenguin.printPlaceOfOrigin();
// myPenguin.printHabit();

// error-> Must call super constructor in derived class before accessing 'this' or returning from derived constructor

class Bird {
  eats = true;

  printHabit = () => {
    console.log(this.eats);
  };
}

class Penguin extends Bird {
  habitat = "Antartica";

  printPlaceOfOrigin = () => {
    console.log(this.habitat);
  };
}

const myPenguin = new Penguin();
console.log(myPenguin);
myPenguin.printPlaceOfOrigin();
myPenguin.printHabit();


