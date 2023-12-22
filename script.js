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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pata with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// destructuring is an ES6 feature is a way to unpack values from an array or an object into seperate variables
// break a complex structure down into a smaller structure like a variable
// for arrays retrieve information from arrays and break them down into variables

// not using destructuing
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// with destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

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

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// if we wanted variable names to be different from the property names
// have to set the property names first then use a colon to specifty a new name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values -->
// if we look for restaurant.menu it does not exist so instead of undefined it will return a [] empty array
// can combine default values, starterMenu is now starters but if it did not exist it would return an []
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables -->
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// javascript when you start a line with curly braces expects a code block
// the way around it is wrapping it in parenthesis
// over rode let a and b
({ a, b } = obj);
console.log(a, b);

// nested objects -->

// const { fri } = openingHours;
// console.log(fri); // returns open: 11, close: 23 // but we want two seperate variables

// this is how we do that
const {
  fri: { open, close },
} = openingHours;

console.log(open, close); // 11  23

restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

// <--------- The Spread Operator ... --------->

// can only use in places where other wise we would seperate values by commas -->

const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// takes the values of the original array and adds the automatically instead of manually like we did above
// taking all the elements out of the array and writing them manually
const newArr = [1, 2, ...arr]; //goodNewArr using the spread operator
console.log(newArr);

const newMenu = [...restaurant.mainMenu, `Gnocchi`]; // not mutating this builds a new array from scratch
console.log(newMenu); // added gnocchi

// two important cases of using the spread operator -->
// create shallow copies of arrays
// and merge two arrays together

const mainMenuCopy = [...restaurant.mainMenu]; // creates a shadow copy of the main menu array

// join 2 arrays
// quick challenge use the spread operator to make one array of the entire menu
const restMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(restMenu);

// spread operator works on iterables -->
// what is an iterable?
//iterables are things like arrays, strings, maps, or sets but not objects. most of the built in structures in js but NOT objects.
const str = `Jonas`;
const letters = [...str, '', `S.`];
console.log(letters); // ['J', 'o', 'n', 'a', 's', '', 'S.']

// const strExpand = `Joshua`;
// const strExpandLetters = [...strExpand, `s`, `s`, `s`];
// console.log(strExpandLetters); // ['J', 'o', 's', 'h', 'u', 'a', 's', 's', 's']

// real world example
const ingredients = [
  // prompt(`Let's make pasta! Ingredient 1? `),
  // prompt(`Let's make pasta! Ingredient 2? `),
  // prompt(`Let's make pasta! Ingredient 3? `),
];
console.log(ingredients);

// old way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// spread operator also works on objects even though they are not iterables
// objects
const newRestaurant = { ...restaurant, founder: `Giuseppe`, foundedIn: 1998 };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ristorante Roma`;

console.log(restaurantCopy.name); // Roma
console.log(restaurant.name); // Italiano

// <--------- Rest Pattern and Parameters  --------->

// Spread, because on the RIGHT side of the = -->
const spreadArr = [1, 2, ...[3, 4]];
const [] = [1, 2, 3, 4, 5];

// Rest, because on the LEFT side of =
// called rest because it will take rest of elements and then put them into a new array --> in this case 'others'
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others);

// pizza, (skip), risotto, then the REST of the array elements
// rest element must be that last element
// one rest in any destructuring assignment
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects -->

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // thu ... fri ... because we took saturday into it's own variable
