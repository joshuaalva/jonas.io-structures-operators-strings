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
    console
      .log
      // `Order recieived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      ();
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `Via del Sole 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// Real world example
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 2?`),
//   prompt(`Let's make pasta! Ingredient 3?`),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = `Ristorante Roma`;
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish: null and undefined (not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

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

// Logical Assignment Operators

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// this works because of short circuiting
// if first value is truthy it will be returned and second not even evaluated
// rest2.numGuests = rest1.numGuests || 10;

// console.log(rest2.numGuests); // output: 20

// logical assignment operator
// OR assignment operator
// rest1.numGuests ||= 10; // more concise way
// rest2.numGuest ||= 10;

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10; // more concise way
// rest2.numGuest ??= 10;

// rest2.owner = rest2.owner && `<ANONYMOUS`;

// console.log(rest1);
// console.log(rest2);

// Coding Challenge #1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borussia Dortmund',

//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],

//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Create one player array for each team (variables'players1'and 'players2')
// const [players1, players2] = game.players;
// // const players1 = game.players[0];
// // const players2 = game.players[1];
// console.log(`<-- each team has its own variables -->`);
// console.log(players1, players2);

// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// console.log(
//   `<-- destructure and create variables for gk and then ...restofteam -->`
// );
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams(22 players)
// console.log(`<-- create an array of all the players 22 total -->`);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game,BayernMunich(team1) used 3 substitute players.So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(
//   `<-- contains all the original team1 players plus thiago, coutinho, and perisic -->`
// );
// console.log(players1Final);

// // 5. Based on the game.oddsobject, create one variable for each odd(called 'team1', 'draw' and 'team2')
// // I originally destructured it as an array when it should've been an object do a better job of reading the actual challenge
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(
//   `<-- create one variable called team1, draw, team2 based on objects.oddsobject`
// );
// console.log(team1, draw, team2);

// // 6. Write a function('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// console.log(
//   `<-- arbitray number of player names and prints each of them to the console, along with the numbers of goals scored in total -->`
// );

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator

// console.log(`<-- team with lower odds is more likely to win -->`);

// team1 < team2 && console.log(`Team 1 is more likely to win`);

// Destructuring Arrays... again.
// Basic Syntax and jS features but focus on more updated features

// destructuring is basically a way of unpacking values from an array or object into seperate variables
// recieve elements from the array and store them into variables

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// desctructuring the array
// array is on the left side of the equal sign
// knows it should do destructuring don't forget to declare the variables
// original array is not effected
// const [x, y, z] = arr;
// console.log(x, y, z);

// to skip an element in the original array you can leave a gap with commas
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching Variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// recieve to return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const nested2 = [1, 2, [4, 5, 6]];
// const [a, , [b, c, d]] = nested2;
// console.log(a, b, c, d); // 1, 4, 5, 6

// Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(name, openingHours, categories);

// // Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters); // default value [] for menu

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c); // 11 23

// Destructuring Arrays Practice

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// const [a, b, c, d] = arr;
// console.log(a);

// Nested Destructuring
// const arr2 = [1, 2, 3, [4, 5, 6]];
// const [e, f, g, [h, i, j]] = arr2;
// console.log(e, f, g, h, i, j);

// Objects Destructuring Practice
// Mutating starterMenu Property
// const { starterMenu: menu, name, openingHours, categories } = restaurant;
// console.log(menu, name, openingHours, categories);

// Spread Operator

// const arr = [7, 8, 9];
// manually having to add more to this arr original array
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr); // output: [1, 2, 7, 8, 9];

// const newArr = [1, 2, ...arr]; // spread operator ...
// takes values out of original array and writes them out individually
// spread operator ...
// console.log(newArr);
// console.log(...newArr); // logs individual elements of an array

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(restaurant.mainMenu);
// console.log(newMenu); // added Gnocchi to the main menu
// spread operator builds a new array from scratch

// Copy Array
// const mainMenuCopy = [...restaurant.mainMenu]; // created a shallow copy of an array

// Join 2 Arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// iterables: arrays, strings, maps, sets... not objects
// const str = `Jonas`;
// const letter = [...str, '', 'S.'];
// console.log(letter);
// console.log(...str); // same as writing out 'j' 'o' etc...
// console.log(``);

// Rest Pattern and Parameters

// 1. Destructuring

// SPREAD, because on right side of equals sign
// const arr = [1, 2, ...[3, 4]];
// REST, because on left side of equals
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2. Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// can also accept arrays
// const x = [23, 5, 7];
// add(...x);

// Short Circuiting && and ||

// console.log(3 || `Jonas`); // output: 3
// // once it reads true it stops or 'short-circuits'

// console.log('' || `Jonas`); // jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null

// this is to check is numGuests exist
// if it does not it returns 10 after reading the ternary operator
// return guests1 output 10 because numGuests does not actually exist
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// console.log(`<-- and -->`);
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushrooms`, `spinach`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

// The Nullish Coalecing Operator
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// const nullValue = null;
// const emptyText = ""; // falsy
// const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA); // "default for A"
// console.log(valB); // "" (as the empty string is not null or undefined)
// console.log(valC); // 42

// Coding Challenge #1 Pt. II

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borussia Dortmund',

//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],

//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1, players2);

// 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers); //22

// 4
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal); //14

// 5
// const { team1, x: draw, team2 } = game.odds; // set default value of x to draw for this to work
// console.log(team1, draw, team2);

// 6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// 7

// team1 < team2 && console.log(`Team 1 is more likely to win`);

// Looping Arrays the For-Of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for of loop
for (const item of menu) console.log(item);
// "for item of the menu"

// for loop
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// a bit of a pain when we need an index in the for of loop
// but it is possible

// for (const item of menu.entries()) {
//   console.log(item);
// }

// console.log(...menu.entries());

// Enhanced Object Literals

const openingHours = {
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
};

// notes
