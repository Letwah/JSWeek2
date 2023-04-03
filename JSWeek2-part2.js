/*************COLETTE'S JS HOMEWORK WEEK 2 part 2***************/

//create a nested function - scope chaining

//Define 3 the variables in the correct place so that:
//a.	The first variable is accessible inside every function.
//b.	The second variable is accessible inside the second and third function only.
//c.	The third variable is accessible inside the third function only.

function funcOne(a) {
  var test = "hello";
  // console.log(test2);
  function funcTwo(b) {
    var test2 = "private hello";
    function funcThree(c) {
      var test3 = "most private hello";
      Iameverywhere = "hello"; //Define a 4th variable inside the 3rd function. Available everywhere.
      {
        // let IAmSuperPrivate = "bob"; //Create a scope inside the 3rd function,
        //place a variable inside it that is only accessible inside that scope.
      }
      // console.log(IAmSuperPrivate);
      console.log(test, test2, test3);
    }
    funcThree();
  }
  funcTwo();
}
funcOne();

//Create an object which contains a function which console.logs this.something, where something is any name you like.

const myObject = {
  name: "Jimmy",
  age: 41,
  sayName: function () {
    console.log(this.name);
  },
};

myObject.sayName();

//object that contains information about the make/model of a car
const car = {
  make: "Chevrolet",
  model: "Camero",
  get makeModel() {
    return `${this.make} ${this.model}`;
  },
  diffContext: function () {
    //check which this you are referring to
    console.log(this);
  },
};

car.diffContext();
console.log(car.makeModel); // Chevrolet Camero

class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true

/* Use call to execute the function using a different context

13. Use a try/catch block to ensure you understand the syntax
DONT UNDERSTAND THIS - RAN OUT OF TIME

14. Create a timer that runs once
15. Create a timer that runs many times
16. Clear one of the timers
 */

function handler() {
  console.log("Handler ran");
}

console.log("BEFORE timer begins");

//12. Use bind to create an instance of the function that is bound to a different object ???
//DONT UNDERSTAND THIS

handler.bind("Handler ran");

setTimeout(handler, 2 * 1000); //two times 2000 to make second into miliseconds
// setTimeout(handler, 1500); // in miliseconds
const myTimer = setTimeout(handler, 2 * 1000);

console.log("AFTER timer has began"); //this is asyncrinous behaviour

// setTimeout(function () {
//   clearInterval(myTimer);
// }, 2000);

// setInterval(handler, 10); - makes it run 10 times
clearInterval(myTimer);

//17. Use a ternary c

const age = 17;
const beverage = age >= 18 ? "Beer" : "Juice";

console.log(beverage); // "juice"
