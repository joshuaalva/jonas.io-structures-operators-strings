'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// destructuring: unpacking values from an array or object into seperate variables
// break it down into a smaller data structure
// used to retrieve elements from an array and structure them in a very simple way

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    // be careful with the way you type this out
    // syntax & spelling
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[1];

const [x, y, z] = arr; // destructuring assignment
// whenever javascript sees the square brackets on the left side it is destructured // original array not afffected
console.log(x, y, z); // 2, 3, 4
// x becomes first, y second, z third
// original array is not effected
console.log(arr);

// const [first, second] = restaurant.categories; // italian, pizzeria
let [main, , secondary] = restaurant.categories; // italian, vegetarian // the additional ,, skips one element
console.log(main, secondary);

//without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// with destructuring
[main, secondary] = [secondary, main]; // do not need a temp variable in the middle
console.log(main, secondary);

console.log(restaurant.order(2, 0));
// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]]; // nested one array inside of another array
// const [i, , j] = nested; // i = 2 skips 4 and gives 5 / 6
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k); // nested desctructuring

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //  8 9 undefined
// added default values with = 1

// object destructuring
const { name, openingHours, categories } = restaurant;
// same as arrays just using curly braces, and have to name the properties
console.log(name, openingHours, categories); // giving them new varaible names

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// can be really useful to have default values
// restaurant.menu would return undefined
// especially helpful when you don't have data hard coded for example an api call
// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
(let { a, b } = obj);
