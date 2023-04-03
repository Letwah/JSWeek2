//Conditional (Ternary) Operator - If you want it to resolve to something other than true/false

var age = 18;

var message;

//when you want to return
// if  (age > 17) {
//     message = 'You are an adult';
// } else {
//   message = 'You are an child';
// }

//ternaries only work if two possible states this is an expression - this is a ternary

message = age > 17 ? "you are an adult" : "you are a child";

console.log(message);

///memorisation function is the way to use tis

function getAFunc(item) {
  switch (item) {
    case 0:
      return function () {
        console.log("Hello World");
      };
    case 1:
      return function () {
        console.log("Bye World");
      };

    default:
      break;
  }
}

var helloWorld = getAFunc(0);
console.log(helloWorld());

//arguemnt

function add(x, y) {
  console.log(arguements);
}

// add(1, 2, 3);

console.log(add.length);

//error handling catching error - when somthing is unpredicatble - sincronous errors -
//like if else but error is special object

try {
  console.log("try catch began");
  console.log(hello); //causes the crash
  console.log("try catch ended");
} catch (error) {
  console.log("the try threw an error", error);
} finally {
  console.log("I always run");
}

//SCOPE - way to manage use of same name - var creaties scope - so if you dont use it makes it available everywhere (BAD)
var age = 42; //declared everywhere outside of function

function one() {
  var name = "Colette";

  function inner() {
    console.log(name, age);
  }
  inner();
}

function two() {
  var name = "Tally";
  console.log(name);
}

one();
two();

//var is to change scope or make something private

function one() {
  name = "Colette"; ///global but instantly becomes local because of next line var
  var name;
}

one();

// passing a primative to express scope function scope with age as example
function one() {
  var name = "Colette";
  console.log(name);
  var age = 42; ///global scope it is very bad

  two(age);
}

function two(age) {
  var name = "Tally";
  console.log(name);
}

one();

// Sharing Data between Functions
var age;

function one() {
  var name = "Colette";
  age = 42;
  console.log(name);
}

function two() {
  var name = "Tally";
  console.log(name, age);
}

one();
two();

//hoisting

function one() {
  var name;
  name = "Colette";
}

one();

///OR

one();

function one() {
  console.log("Hi"); //this is a declaration
}

var one = function () {
  console.log("hi"); ///expression need expressing before you use them decalre to come last/after
};

one();

//implicit globals

//let

function one() {
  var name = "Colette";
  console.log(name);
  {
    let age = 41;
  }

  console.log(age);
}

//   function two() {
//     var name = "Tally";
//     console.log(name);
//   }

one();
//   two();

//scoped using var

function demo() {
  {
    var functionScoped = true;
    let name = "Russell";
    console.log(name);
  }
  {
    let name = "Sally";
    console.log(name, functionScoped);
  }
}

demo();

//const

function demo() {
  {
    var functionScoped = true;
    const name = "Russell";
    console.log(name);
  }
  {
    const name = "Sally";
    console.log(name, functionScoped);
  }
}

demo();

//dont name two things the same - shadows

const a = "a";
const c = "c";

function fn1(a) {
  console.log(a);
  // is 'b' not 'a' because the parameter
  // 'shadows'/blocks the outer var

  const c = "otherc"; // block-scoped, so won't collide with line 2
  console.log(c); // 'otherc'
}

fn1("b");

//vpn is  a proxie = so what is so IP addresses are hidden- deligated trust

/// context - referring to thing relative to where there are this is using this which is bad

const obj = {
  firstName: "andy",
  lastName: "smith",
  fullName: function () {
    console.log(`hello ${this.firstName} ${this.lastName}`);
  },
};

const obj2 = {
  firstName: "dave",
  lastName: "leary",
  fullName: function () {
    console.log(`hello ${this.firstName} ${this.lastName}`);
  },
};

obj.fullName();
obj2.fullName();

//call site - where in the function something is referred to....

const obj1 = {
  firstName: "andy",
  lastName: "smith",
  fullName: function () {
    console.log(`hello ${this.firstName} ${this.lastName}`);
  },
  whatIsThis: function () {
    //check which this you are referring to
    console.log(this);
  },
};

// const fullName = obj1.fullName;

// fullName();

obj1.whatIsThis();

///changing the CONTEXT - slide 57 https://slides.com/jmsherry/functions#/0/56

// call see screenshots
//apply see vid 2 1/2 hours in
//bind - creates a context that stays forever

///TIMER - part of node - browser api
//https://slides.com/jmsherry/further-js?token=TT_KvAA0#/0/18

function handler() {
  console.log("Handler ran");
}

console.log("BEFORE timer begins");

setTimeout(handler, 2 * 1000); //two times 2000 to make second into miliseconds
// setTimeout(handler, 1500); // in miliseconds
// const myTimer = setTimeout(handler, 2 * 1000);

console.log("AFTER timer has began"); //this is asyncrinous behaviour

// setTimeout(function () {
//   clearInterval(myTimer);
// }, 2000);

clearInterval(myTimer);
