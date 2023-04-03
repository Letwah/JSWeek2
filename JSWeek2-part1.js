/*************COLETTE'S JS HOMEWORK WEEK 2***************/
//array with 10 items

const film = [
  {
    filmtype: "Kodachrome100",
    price: 23,
  },
  {
    filmtype: "Ektar 100",
    price: 26,
  },
  {
    filmtype: "Kodak Portra 100",
    price: 27,
  },
  {
    filmtype: "Kodak Portra 400",
    price: 22,
  },
  {
    filmtype: "Kodak Portra 800",
    price: 22,
  },
  {
    filmtype: "Ilford HP5",
    price: 20,
  },
  {
    filmtype: "FujiFilm Velvia 50",
    price: 25,
  },
  {
    filmtype: "Ektachrome E100",
    price: 24,
  },
  {
    filmtype: "FujiFilm Velvia 100",
    price: 31,
  },
  {
    filmtype: "Fujifilm Superia X-TRA 400",
    price: 40,
  },
];

//update an item
film[1] = { filmtype: "Ilford-grain", price: 50 };
console.log(film);

var index = film.indexOf({
  filmtype: "Ilford HP5",
  price: 20,
});
if (index !== -1) {
  //Delete half of the array
  film.length = 5;
}

console.log(film);

// Shift - The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

var firstElement = film.shift();

console.log(film);
console.log(firstElement);
// Expected output: { filmtype: 'Kodachrome100', price: 23 }

// Unshift - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

console.log(
  film.unshift(
    {
      filmtype: "Kodak Portra 50",
      price: 27,
    },
    {
      filmtype: "Fujifilm Superia X-T2200",
      price: 46,
    }
  )
);

console.log(film);

// Concatenating - can't figure out how to do with with he film list???

var array = ["a", "b", "c"];
var array1 = ["d", "e", "f"];
var array2 = array.concat(array1);

console.log(array2);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// Splicing - see line 56

// Slicing
console.log(film.slice(2, 4));
// Expected output: list { filmtype: 'Ilford-grain', price: 50 }, { filmtype: 'Kodak Portra 100', price: 27 }

// Reverse

var reversed = film.reverse();
console.log("reversed:", reversed);

// Join

console.log(film.join());
// Expected output: "a,b,c"

console.log(film.join(""));
// Expected output: "abc"

console.log(film.join("-"));
// Expected output: "a-b-c"

// forEach

film.forEach((element) => console.log(element));

// Includes
console.log(film.includes({ filmtype: "Kodak Portra 800", price: 22 }));
// Expected output: true - why this not work???

// indexOf
console.log(film.indexOf({ filmtype: "Fujifilm Superia X-T2200", price: 46 }));
// Expected output: -1

// Every -  CAN'T FIGURE THIS OUT ON film LIST
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
var isAboveThreshold = (currentValue) => currentValue > 20;

var list2 = [1, 30, 39, 29, 10, 13];

console.log(list2.every(isAboveThreshold));
// Expected output: flase

// Some - can't do this with list???
function checkAvailabilty(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailabilty(film, { filmtype: "Kodak Portra 100", price: 27 });
checkAvailabilty(film, { filmtype: "FujiFilm Velvia 666", price: 31 });

console.log(
  checkAvailabilty(film, { filmtype: "Kodak Portra 100", price: 27 })
); //should be true.....
console.log(
  checkAvailabilty(film, { filmtype: "FujiFilm Velvia 666", price: 31 })
); //flase

///gave up trying to use same array

// Filter

var arrays = [
  { name: "Russ", phone: 29272, age: 43 },
  { name: "Mark", phone: 2652, age: 36 },
  { name: "Kate", phone: 13123, age: 46 },
  { name: "Ryan", phone: 231123, age: 29 },
];

var result = arrays.filter(handler);

function handler(item) {
  return item.name === "Kate" && item.phone.toString();
}

console.log(result);

// Find
var inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

var result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

// findIndex
/*The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
If no elements satisfy the testing function, -1 is returned.

DONT GET THIS*/

var includes = (item) => ({ filmtype: "Kodak Portra 100", price: 27 });

console.log(film.findIndex(includes));

// Sort

var keyArray = [
  { key: 1, value: 100 },
  { key: 3, value: 300 },
  { key: 2, value: 200 },
];
keyArray.sort();

console.log(keyArray);

// Map

var mappedArray = keyArray.map(({ key, value }) => ({ [key]: value }));

console.log(mappedArray); // [{ 1: 100 }, { 2: 200}, { 3: 300 }]
console.log(keyArray);
