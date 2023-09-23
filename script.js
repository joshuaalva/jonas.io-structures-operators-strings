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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
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

restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sole 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// Destructuring

// const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[1];

// const [x, y, z] = arr; // destructuring assignment
// // whenever javascript sees the square brackets on the left side it is destructured // original array not afffected
// console.log(x, y, z); // 2, 3, 4
// // x becomes first, y second, z third
// // original array is not effected
// console.log(arr);

// // const [first, second] = restaurant.categories; // italian, pizzeria
// let [main, , secondary] = restaurant.categories; // italian, vegetarian // the additional ,, skips one element
// console.log(main, secondary);

// //without destructuring
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // with destructuring
// [main, secondary] = [secondary, main]; // do not need a temp variable in the middle
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// // Recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]]; // nested one array inside of another array
// // const [i, , j] = nested; // i = 2 skips 4 and gives 5 / 6
// // console.log(i, j);
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k); // nested desctructuring

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); //  8 9 undefined
// // added default values with = 1

// // object destructuring
// const { name, openingHours, categories } = restaurant;
// // same as arrays just using curly braces, and have to name the properties
// console.log(name, openingHours, categories); // giving them new varaible names

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // can be really useful to have default values
// // restaurant.menu would return undefined
// // especially helpful when you don't have data hard coded for example an api call
// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// restaurant;
// console.log(menu, starters);

// // mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // cannot assign anything to a code block
// // wrap it into parenthesis to make it work
// ({ a, b } = obj);
// // console.log(a, b);

// // nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arrr = [7, 8, 9];
// const badNewArr = [1, 2, arrr[0], arrr[1], arrr[2]];
// console.log(badNewArr);

// // Spread Operator

// const newArr = [1, 2, ...arrr];
// console.log(newArr);
// // takes values out of the arrr array and write them indiviudually in the array as if we had wrote them manually
// // whenever we need them individually we need the spread operator

// const newMenu = [...restaurant.mainMenu, 'Gnocchi']; // creating a completely new array from scratch not mutating
// console.log(newMenu); // spread operator does not create new variables can only use it when you would seperate values by commas

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu]; // created a shallow copy of this array
// // Join 2 or more arrays together
// const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu2);

// // spread operator works on all iterables
// // iterables are things like arrays, strings, maps, sets but not objects
// // most of the built in structures in js but NOT objects

// const str = `Jonas`;
// const letters = [...str, '', 'S.'];
// console.log(letters);

// console.log(...str);
// // console.log('j', 'o');

// // real-world example

// const ingredients = [
//   // prompt(`Let's make pasta! Ingredient 1`),
//   // prompt(`Let's make pasta! Ingredient 2`),
//   // prompt(`Let's make pasta! Ingredient 3`),
// ];

// console.log(ingredients);

// // same output spread operator is that much better
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// // shallow copy and resassigned
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name); // ristorante roma
// console.log(restaurant.name); // classico italiano

// Rest pattern and parameters
// same syntax as the spread operator but does the opposite
// spread is to unpack an array while spread is to pack

// const arr3 = [1, 2, ...[3, 4]]; // spread because on right hand side of assignment operator
// console.log(arr3);

// const [j, k, ...others] = [1, 2, 3, 4, 5]; // rest syntax left hand side of operator
// console.log(j, k, others); // will take remaining elements and put them in a new array

// const [pizza, , risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFoods);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// console.log(sat);

// 2 Functions

//rest parameters
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olive', 'spinach');

// rest and spread look exactly the same but they work in opposite ways depending on where they are used
// the spread operator is used where we would otherwise write values
// the rest operator is used where variable names go seperated by commes

//Short Circuiting && and II

// 3 Properties of Logical Operators
// Can use any data type
// They can return any data type
// Short-circuiting or short circuit evaluation

// console.log(3 || 'jonas');
// short circuiting means if the first value is truthy that is what it will return
// Expected output: 3 // other property will  not even be evaluated

// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello is the first truthy value // that's what get printed to the console

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10; // short-circuiting if it doesn't exist it will default to 10 >> or 10
// console.log(guests2);

// will not work if the number is 0 because it is a falsey value
// there is a solution discussed later

// console.log(`--- and ----`);
// console.log(0 && `Jonas`); // returns 0 it short circuits never gets to jonas // opposite of what happens with or
// console.log(7 && `Jonas`); // returns true if all operants are true returns Jonas
// console.log(`Hello` && 23 && null && `Jonas`); // returns null... evaluation stops at the falsey value

// Practical
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

// or operator will return first truthy value or last if all are falsey
// and operator will return the first falsey or last value if they are all truthy
// can use or to set default values
