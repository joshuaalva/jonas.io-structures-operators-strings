'use strict';

// Data Structures, Modern Opreators, and Strings...
// <--------- Destructuring Arrays --------->
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // method
  order: function (starterIndex, mainIndex) {
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
      open: 0, // open 24 hours
      close: 24,
    },
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// destructuring is an ES6 feature is a way to unpack values from an array or an object into seperate variables
// break a complex structure down into a smaller structure like a variable
// for arrays retrieve information from arrays and break them down into variables

// not using destructuing
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with destructuring
const [x, y, z] = arr;
console.log(x, y, z);

// do not have to take everything out
let [main, , secondary] = restaurant.categories;
// to skip just leave a space
console.log(main, secondary); // italian, vegetarian

// switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary); // vegetarian, italian

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // garlic bread, pizza

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2, 5, 6

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// <--------- Destructuring Objects --------->
