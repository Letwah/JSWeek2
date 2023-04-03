// method that lives inside an object slide 60
var plainOldJsObject = {
  name: "russel",
  happy: true,
  sayHi: function () {
    console.log(`hi`);
  },
};

plainOldJsObject.sayHi();

// standard built in objects

var message = "hello world";

console.log(message.toUpperCase());
// console.log(message.charAt(2));

//https://github.com/jmsherry/method-cheatsheats/blob/main/string-static-instance-methods.md

//fake code

var message2 = {
  value: "hello world",
  toLowerCase: function () {
    //converts each character to lower case
  },
};

//escaping (ignore next charachter) Strings may be created with single or double quotes pg 65 data types slides

// var message = `O'neil said "hello"`;

//or

var message = 'O\'neil said "hello"';

console.log(typeof message);

// indexes p66

var array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

//look up string methods

array[0] = "Colette";

console.log(array[0]);

/*

2 + 2    //4

"2" + "2"    // "22"

2 + 4 +"6"    // "66"

3 + 6 +"9" + 4    // "994"

As soon as a string gets involved it becomes (or coerces the number into) a string.

(the reverse type coercion happens if you do any maths/logic operation (other than +, obvs) )

"664" * 1 + 3    // 667  

*/

// floating point precesion problem - don't have infinite prececsion p68 *DON'T GET INVOLVED WITH DECIMALS*
// https://www.youtube.com/watch?v=PZRI1IfStY0   make it into a whole no basically..

var num1 = 10;
var num2 = 20;

console.log((num1 + num2) / 100);

// number object class

// console.log(Number.MIN_VALUE);

console.log(0 == -0);

// this will give NaN
// console.log(Number("cat"));

//is white in terminal as it becomes a string it is not a number now...
var num = 100.78594212655;

//make its to one decimal place
console.log(num.toFixed(1));

console.log(num.toString(8));

//turn an integer into a number??? not sure misssed this bit almost hour into video

// var num = Number.parseInt(5.25, 10);

// console.log(Number.parseInt());

///random number
// var math = 99.99;

// console.log(math.random());

//THE OBJECT FAMILY
/* 
An Object - grouped data to represent a <thing> cue: it's a noun
An Array - grouped data to represent a group of things
cue: they are plural
A Function is an object with an execution context 

Objects and arrays are sometimes called:

'Compound data types' (unofficially)
'Collections' (according to the spec)
Objects are 'Keyed Collections'
Arrays are 'Indexed Collections'
*/

//pass by reference
//will always be the same object...
// var obj = { name: "Colette" };

// var obj2 = obj;

// obj2.name = "Sally";

// console.log(obj, obj2);

// //make a copy of an object

// var obj = { name: "Colette" };

// var obj2 = JSON.stringify(obj);
// obj = JSON.parse(obj2); //deep clone

// obj2.name = "Sally";

// console.log(obj, obj2);

///next one - use when working with array or object

const obj = { name: "dave" };

obj.name = "dave";

console.log(obj);

//array

const arr = [1, 2, 3];

console.log(arr);

//declaring an array

var myArray = ["Moe", "Larry", "Curly"];
console.log(myArray);

//array length - see screenshot

// array methods https://github.com/jmsherry/method-cheatsheats/blob/main/array-methods.md
//see screenshot

var fruits = ["lemon", "banana", "apple"];

console.log(fruits.includes("lemon"));

//add to array push and unshift
//push adds items to the end

var fruits = ["lemon", "banana", "apple"];

fruits.push("banana");

console.log(fruits);

//unshift adds something to start of array

var fruits = ["lemon", "banana", "apple"];

fruits.unshift("banana");

console.log(fruits);

//remove something .pop or .shift

const myArray5 = ["a", 2, 3, 19];

// remove last element of array and return it
myArray5.pop(); // 19

// remove first element of array and return it
myArray5.shift(); // 'a'

// we can add/remove from an array at a specific  index using .splice

var myFish = ["angel", "clown", "mandarin", "sturgeon"];

myFish.splice(2, 0, "drum");
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1);
// myFish is ["angel", "clown", "mandarin", "sturgeon"]

//copying parts of an array

var myFish = ["angel", "clown", "mandarin", "sturgeon"];

// copy
var newArr = myFish.slice();

// copy part
var newArr2 = myFish.slice(0, 2);
// newArr2 is ["angel", "clown"]

/// reverse

const a = ["one", "two", "three"];
a.reverse();

console.log(a); // ['three', 'two', 'one']

/* Concatenating two arrays
Concatenation is a technical term meaning to join two entities (strings, arrays, etc.) together. 
The method in arrays is called .concat(entity1[, entity2]) for short */

var arr1 = ["a", "b", "c"];
var arr2 = ["d", "e", "f"];

var arr3 = arr1.concat(arr2);

// results in a new array [ "a", "b", "c", "d", "e", "f" ]

var weather = ["Wind", "Rain", "Fire"];
weather.join(); // 'Wind,Rain,Fire'
weather.join("-"); // 'Wind-Rain-Fire'

console.log(weather.join("-"));

//Iterating over an Array

var colours = ["red", "green", "blue", "black", "orange"];

function Colette(item, index, array) {
  console.log(item, index, array);
}

colours.forEach(Colette);

//no two objects are idential
//see screenshots with indexOf

//.every  .some  one looks for everything one looks for 1 or more

//.find like indexOf

var listy = [{ num: 1 }, { num: 3 }, { num: 9 }];

var indexOf = listy.findIndex(handler);

function handler(item) {
  return item.num === 3;
}

console.log(listy[indexOf]);

//OR

var listy = [{ num: 1 }, { num: 3 }, { num: 9 }];
var result = listy.indexOf({ num: 3 });

console.log(result);

//OR

var listy = [{ num: 1 }, { num: 3 }, { num: 9 }];
var result = listy.some(handler);

function handler(item) {
  return item.num === 3;
}

console.log(result);

//findIndex

var listy = [{ num: 1 }, { num: 3 }, { num: 9 }];
var result = listy.findIndex(handler);

function handler(item) {
  return item.num === 3;
}

console.log(result);

//see screenshot for FILTER VERY IMPORTANT

var arrays = [
  { name: "Colette", phone: 29272 },
  { name: "Alan", phone: 2652 },
  { name: "Sally", phone: 13123 },
  { name: "Bob", phone: 231123 },
];

var result = arrays.filter(handler);

function handler(item) {
  return item.name === "Colette" && item.phone.toString().include(29272);
}

console.log(result);

//MAP

// var arrays = [
//   { name: "colette", phone: 29272 },
//   { name: "alan", phone: 2652 },
//   { name: "Sally", phone: 13123 },
//   { name: "Bob", phone: 231123 },
// ];

// var result = arrays.map(handler);

// function handler(item) {
//   return `<li>
//   Name:${item.name}
//   Phone:${item.phone}
//   </li>`;
// // }

// document.getElementById("root").innerHTML = `<ol>${result.join("")}</ol>`;

//returns
//sort
var arrays = [1, 2, 3, 5, 33, 22, 18963, 222];

// function handler(one, two) {
//   if (one > two) {
//     return 1;
//   } else if (one < two) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

function handler(one, two) {
  if (one > two) return 1;
  if (one < two) return -1;
}

arrays.sort(handler);

console.log(arrays);

//.reduce

var arrays = [100, 200, 300, 50, 1, 2, 4];

arrays.reverse();

var result = arrays.reduce(handler);

function handler(total, nextItem) {
  return total / nextItem;
}

console.log(result);

//or add
var arrays = [100, 200, 300, 50, 1, 2, 4];

var result = arrays.reduce(handler);

function handler(total, nextItem) {
  return total + nextItem;
}

console.log(result);
