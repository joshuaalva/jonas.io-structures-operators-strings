'use strict';
const weekdays = [`mon`, `tues`, `wed`, `thu`, `fri`, `sat`, `sun`];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },

  [weekdays[4]]: {
    open: 11,
    close: 23,
  },

  [weekdays[5]]: {
    open: 0, // open 24 hours
    close: 24,
  },
};

// Data Structures, Modern Opreators, and Strings...
// <--------- Destructuring Arrays --------->
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // method
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 Enhanced Object Literals
  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pata with ${ing1}, ${ing2}, ${ing3}`);
  },
  // <--- Old way of decalaring a method -->

  // orderPizza: function (mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);

  // <--- Enhanced ES6 --->
  orderPizzas(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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
// let [main, , secondary] = restaurant.categories;
// to skip just leave a space
// console.log(main, secondary); // italian, vegetarian

// switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary); // vegetarian, italian

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // garlic bread, pizza

// Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k); // 2, 5, 6

// Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// <--------- Destructuring Objects --------->

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// if we wanted variable names to be different from the property names
// have to set the property names first then use a colon to specifty a new name
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// default values -->
// if we look for restaurant.menu it does not exist so instead of undefined it will return a [] empty array
// can combine default values, starterMenu is now starters but if it did not exist it would return an []
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables -->
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// javascript when you start a line with curly braces expects a code block
// the way around it is wrapping it in parenthesis
// over rode let a and b
// ({ a, b } = obj);
// console.log(a, b);

// nested objects -->

// const { fri } = openingHours;
// console.log(fri); // returns open: 11, close: 23 // but we want two seperate variables

// this is how we do that
// const {
//   fri: { open, close },
// } = openingHours;

// console.log(open, close); // 11  23

// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `Via del Sole, 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// <--------- The Spread Operator ... --------->

// can only use in places where other wise we would seperate values by commas -->

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// takes the values of the original array and adds the automatically instead of manually like we did above
// taking all the elements out of the array and writing them manually
// const newArr = [1, 2, ...arr]; //goodNewArr using the spread operator
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, `Gnocchi`]; // not mutating this builds a new array from scratch
// console.log(newMenu); // added gnocchi

// two important cases of using the spread operator -->
// create shallow copies of arrays
// and merge two arrays together

// const mainMenuCopy = [...restaurant.mainMenu]; // creates a shadow copy of the main menu array

// join 2 arrays
// quick challenge use the spread operator to make one array of the entire menu
// const restMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(restMenu);

// spread operator works on iterables -->
// what is an iterable?
//iterables are things like arrays, strings, maps, or sets but not objects. most of the built in structures in js but NOT objects.
// const str = `Jonas`;
// const letters = [...str, '', `S.`];
// console.log(letters); // ['J', 'o', 'n', 'a', 's', '', 'S.']

// const strExpand = `Joshua`;
// const strExpandLetters = [...strExpand, `s`, `s`, `s`];
// console.log(strExpandLetters); // ['J', 'o', 's', 'h', 'u', 'a', 's', 's', 's']

// real world example
// const ingredients = [
// prompt(`Let's make pasta! Ingredient 1? `),
// prompt(`Let's make pasta! Ingredient 2? `),
// prompt(`Let's make pasta! Ingredient 3? `),
// ];
// console.log(ingredients);

// old way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// spread operator also works on objects even though they are not iterables
// objects
// const newRestaurant = { ...restaurant, founder: `Giuseppe`, foundedIn: 1998 };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = `Ristorante Roma`;

// console.log(restaurantCopy.name); // Roma
// console.log(restaurant.name); // Italiano

// <--------- Rest Pattern and Parameters  --------->

// Spread, because on the RIGHT side of the = -->
// const spreadArr = [1, 2, ...[3, 4]];
// const [] = [1, 2, 3, 4, 5];

// Rest, because on the LEFT side of =
// called rest because it will take rest of elements and then put them into a new array --> in this case 'others'
// const [x, y, ...others] = [1, 2, 3, 4, 5];
// console.log(x, y, others);

// pizza, (skip), risotto, then the REST of the array elements
// rest element must be that last element
// one rest in any destructuring assignment
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects -->

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); // thu ... fri ... because we took saturday into it's own variable

// Functions -->
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i]; // no semi-colon all on same line was giving an error
//   console.log(sum);
// };

// add(5, 3, 7, 2);
// add(2, 3);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza(`mushroom`, `onion`, `olive`, `spinach`);

// rest in spread look exactly the same but changes based on where they are used

// <--------- Short Circuiting && and || --------->

// Can use any data type
// Return any data type
// Short-Circuiting or Short-Circuit Evaluation
// console.log(`--- || ---`);
// console.log(3 || `Joshua`); // output: 3

// if the first operant is truthy then the other will not be evaluated

// console.log(`` || `Joshua`);
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || `` || `Hello` || 23); // output: Hello

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// rest numguests doesnt exist default set to 10

// another way we can do this instead of ternary
// restaurant.numGuests = 0;
// const guest2 = restaurant.numGuests || 10;

// && also has short circuiting
// console.log(`--- && ---`);
// console.log(0 && `Joshua`); // 0
// is falsy so stop running there complete opposite of or operator

// console.log(`Hello` && 23 && null && `Joshua`); //null

//practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushrooms`, `spinach`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

// <--------- Nullish Coalescing Operator --------->

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// nullish: null and undefined (not 0 or empty strong)
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// <--------- Logical Assignment Operators --------->

// const rest1 = {
//   name: `Capri`,
//   numGuests: 0,
// };

// const rest2 = {
//   name: `La Piazza`,
//   owner: `Giovanni Rossi`,
// };

// rest1.numberGuests = rest1.numGuests || 10;
// rest2.numberGuests = rest1.numGuests || 10;
// this works because of short circuiting
// if first value is truthy it will be returned and second value will not even be looked at

// more concise
// logical or assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
// accounts for 0
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// logical and assignment operator
// rest2.owner = rest2.owner && `<ANON>`;
// rest1.owner &&= `<ANON`;
// rest2.owner &&= `<ANON`;

// <--------- Coding Challenge #1 --------->

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
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
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1. Create one player array for each team variables players1 & players 2

// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// 2. The first player in any array is the goalkeeper and the others are field players. for bayern create one variable 'gk' with the remaining field players in a field players array.

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// 3. create an array `allplayers` containg all players of both teams

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4. during the game bayern munich used 3 players so create a new array players 1 final containing all the original team1 players +thiago, coutinho,perisic

// const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
// console.log(players1Final);

// 5. based on the game.odds object, create one variable for each odd
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// 6. write a function print goals that recieves an arbitrary number of a player names and prints each one of them to the console along with the number of goals that were scored in total (number of player names passed in);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
// printGoals(`Davies`, `Kimmich`);
// printGoals(...game.scored);

// 7. The team with the lower odd is most likely to win. Print to the console which team is most likely to win, without using an if/else statement or ternary operator.

// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log(`Team 2 is more likely to win`);

// 1. Create one player array for each team variables players1 & players 2

// const [players1, players2] = game.players;
// console.log(players1, players2);

// 2. The first player in any array is the goalkeeper and the others are field players. for bayern create one variable 'gk' with the remaining field players in a field players array.

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// 3. create an array `allplayers` containg all players of both teams
// const allPlayers = [players1, players2];
// console.log(allPlayers);

// <--------- Looping Arrays: The For/Of Loop --------->

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for of

// for (const item of menu) console.log(item);
// item variable is always teh current element in each iteration
// no code block needed when we only have one statement to execute

// for loop
// for (let i = 0; i < menu.length; i++) console.log(menu[i]);

// what if we wanted the current index or current element
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// <--------- Enhanced Object Literals --------->

// took opening hours out of the obect literal
// notes above

// <--------- Optional Chaining ?? --------->

// to check if everything existed from say an API things would get out of hand pretty quickly
// ES2020 has a great solution for this
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// With optional chaining
// if the property before the question mark then it will be read from there
// if not undefined will be returned
// console.log(restaurant.openingHours.mon?.open); // undefined
// console.log(restaurant.openingHours.fri?.open); // 11

// Example
// const days = [`mon`, `tues`, `wed`, `thu`, `fri`, `sat`, `sun`];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day} we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);

// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// Arrays
// const users = [{ name: `Joshua`, email: `hello@joshua.io` }];

// optional chaining checks if the value on the left exists
// console.log(users[0]?.name ?? `User array empty`);

// <--------- Looping Objects: Object Keys, Values, Entries --------->
// Property names are also called 'keys'
// Property Names
// const properties = Object.keys(openingHours);
// console.log(properties); // is an array with three property names

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day},`;
// }

// console.log(openStr);

// What if we wanted the values themselves
// const values = Object.values(openingHours);
// console.log(values);

// entries are names + values together
// entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// can destructure during a for of loop
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// <--------- Coding Challenge #2 --------->

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
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
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1. Loop over the game.scored variable and print each player name to the console along with the goal number
// for (const [i, playerScored] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${playerScored}`);
// }

// we got the for of loop correct and printed everything correctly except for the entries method to give us the actual #

// 2. Use a loop to calculate the average odd and log it to the console
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// 3.Print the 3 odds to the console, but in a nice formatted way
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === `x` ? `draw` : `victor ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// <--------- Sets --------->

// to create a new set write new Set and then pass it an iterable most commonly an array
// set can hold mixed data types that is not a problem at all

// const ordersSet = new Set([
//   `Pasta`,
//   `Pizza`,
//   `Pizza`,
//   `Risotto`,
//   `Pasta`,
//   `Pizza`,
// ]);

// console.log(ordersSet); // Set(3) {`Pasta`, `Pizza`, `Risotto`}
// elements of a set have to be unique so duplicates will be ignored
// just like arrays sets are also iterables
// but very different
// elements of a set of unique, order of values in a set are irrelevant
// strings are also iteragles so we can do this
// console.log(new Set(`Jonas`)); // {`j`, `o`, `n` ...}
// console.log(ordersSet.size); // 3
// console.log(ordersSet.has(`Pizza`)); // true
// console.log(ordersSet.has(`Bread`)); // false
// ordersSet.add(`Garlic Bread`); // garlic bread to the set
// console.log(ordersSet); // Set(3) {`Pasta`, `Pizza`, `Risotto`, `Garlic Bread`}
// ordersSet.delete(`Risotto`);
// console.log(ordersSet); // Set(3) {`Pasta`, `Pizza`, `Garlic Bread`}
// in sets there are no indexes
// can also not pull values from a set
// we just need to know if a value is there or not
// if goal is to store value and then later retrieve it just use an array

// ordersSet.clear(); // Erases Set
// can loop over sets

// for (const order of ordersSet) console.log(ordersSet);

// main use case of sets is to remove duplicates

// Example -->

// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
// we want the three unique values so we create a set just to know these roles exist
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// const staffUnique = [...new Set(staff)]; // can use spread operator to convert this into an array
// console.log(staffUnique);

// <--------- Maps: Fundamentals --------->

// maps are a lot more useful than sets
// in js a map is a data structure that we can use to map values to keys
// in maps the keys can have any type
// objects, arrays, other maps... can be keys

// const rest = new Map();
// rest.set(`name`, `Classico Italiano`);
// rest.set(1, `Firenze, Italy`);
// rest.set(2, `Lisbon, Portrugal`);
// shows map as it is updating --> if i were to console log here it would show Map(3)
// rest
//   .set(`categories`, [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `We are open`)
//   .set(false, `We are closed`);
// console.log(rest.get(`name`));
// console.log(rest.get(true)); // data type of the key does matter

// const time = 21;
// rest.get(time > rest.get(`open`) && time < rest.get(`close`));

// console.log(rest.has(`categories`));
// rest.delete(2);
// console.log(rest); // removes 2 'lisbon, portugal'
// console.log(rest.size);
// rest.clear(); // clears map

// <--------- Maps: Iterations --------->

// const question = new Map([
//   [`question`, `What is the best programming language in the world?`],
//   [1, `C`],
//   [2, `Java`],
//   [3, `JavaScript`],
//   [`correct`, 3],
//   [true, `correct!`],
//   [false, `try again!`],
// ]);

// when creating a new map from scratch this way is preffered
// when we keep adding new eleements using code set method is the way to go
// console.log(question);

// convert object to map -->
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz App
// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof key === `number`) {
//     console.log(key, value);
//   }
// }

// const answer = Number(prompt(`your answer`));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get(`correct`) === answer));

// convert map back into an array -->
// console.log([...question]);

// <--------- Summary: Which Data Structures Should I use??? --------->

// Data Structures Overview.
// Sources of Data
// 1. From program itself: data written directly in source code
// 2. From the UI: Data input from the user or data written in DOM
// 3. From extrenal sources: Data fetched fro exxample from web API
// >> Collection of Data >> Data Structure >> Simple List? Arrays or Sets. -- Key Value Pairs? Object or Maps.

//  Arrays vs. Sets && Objects vs. Maps
// Arrays >> Use when you need ordered list of values (might contain duplicates), use when you need to manipulate data
// Sets >> Use when you need to work with unique values, Use when high-perforamnce is important, Use to remove duplicates from arrays
// Objects >> more traditional, easier to write and access values with . and []
// Maps >> Better performance, Keys can have any data type, easy to iterate, easy to compute size

// <--------- Coding Challenge #3 --------->

// const gameEvents = new Map([
//   [17, `⚽️ Goal`],
//   [36, `🔁 Substituion`],
//   [47, `⚽️ Goal`],
//   [61, `🔁 Substituion`],
//   [64, `🟨 Yellow Card`],
//   [69, `🟥 Red Card`],
//   [70, `🔁 Substituion`],
//   [72, `🔁 Substituion`],
//   [76, `⚽️ Goal`],
//   [80, `⚽️ Goal`],
//   [93, `🟨 Yellow Card`],
// ]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)

// const events = [...new Set(gameEvents.values())];
// console.log(...[events]);

// 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

// gameEvents.delete(69); // delete key 69.
// console.log(gameEvents); // red card deleted check

// 3. Compute and log the following string to the console: `an event happened, on average, every 9 minutes`

// console.log(
//   `an event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// 4. Loop over 'gameEvents' and log each element to the console, marking wehther it's in the first half or second half of the game, like this: [first half]17: goal

// for (const [minute, event] of gameEvents) {
//   const half = minute <= 45 ? `First` : `Second`;
//   console.log(`[${half} Half] ${minute}:${event}`);
// }

// <--------- Working with Strings - Part 1  --------->

// const airline = `TAP Air Portugal`;
// const plane = `A320`;

// console.log(plane[0]); // A
// console.log(`B737`[0]); // B
// console.log(airline.length); // 16
// console.log(`B737`.length); // 4

// console.log(airline.indexOf('r')); // 6 // gives us first instance of
// console.log(airline.lastIndexOf('r')); // 10 // last index of
// console.log(airline.indexOf(`Portugal`)); // 8 // can look for entire words // -1 means cannot be found

// console.log(airline.slice(4)); // position at which extraction would start --> 4 cuts out TAP // AIR Portugal (sub-string)
// to use this string we would have to store it first
// .slice does not mutate the original string

// console.log(airline.slice(4, 7)); // Air

// console.log(airline.slice(0, airline.indexOf(` `))); // gives you the first instance of a space this is after the [2] index // TAP
// console.log(airline.slice(airline.lastIndexOf(` `) + 1)); // +1 removes the space in the front of portugal

// console.log(airline.slice(-2)); //al
// console.log(airline.slice(1, -1)); // AP Air Portuga // -1 cuts the last character 1 starts at A

// const checkMiddleSeat = function (seat) {
// B and E are middle seats
//   const checkSeat = seat.slice(-1);
//   if (checkSeat === `B` || checkSeat === `E`)
//     console.log(`you got the middle seat ☹️`);
//   else console.log(`You got lucky 😊`);
// };

// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);

// strings are just primitives
// whenever we call a method on a string javascript will convert a string primitive to a string object and that's where the methods are called
// it is called boxing >> which is the object

// console.log(new String(`jonas`));
// console.log(typeof new String(`jonas`)); //object

// <--------- Working with Strings - Part 2 --------->

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix Capitalization in name
// const passenger = `jOnas`;
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1); // slice remove the lowercase j
// console.log(passengerCorrect);

// Practice -->
// Build a function that fixes capitalization in names

// takes name and places it into all lower case
// Capitalize just the first letter of the first name
// Return new name

// function correctName(passenger) {
//   const lowerCase = passenger.toLowerCase();
//   const passengerCorrect = lowerCase[0].toUpperCase() + lowerCase.slice(1);
//   console.log(passengerCorrect);
// }

// correctName(`joshua`); // Joshua
// correctName(`lizzie`); // Lizzie
// correctName(`MiChAeL`); // Michael

// Comparing email
// const email = `hello@jonas.io`;
// const loginEmail = `   Hello@Jonas.Io \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// since 2019 there are trim start and trim end which do exactly what it sounds like they do...

// Replacing -->
// const priceGB = `288,97£`;
// console.log(priceGB);
// const priceUS = priceGB.replace(`£`, `$`).replace(`,`, `.`);
// console.log(priceUS); //288.97$

// const announcment = `All passenger come to boarding door 23. Boarding door 23`;
// console.log(announcment.replaceAll(`door`, `gate`)); // All passenger come to boarding gate 23. Boarding door 23

// Only replaces first occurence that's how it works
// replace all now working!!

// Booleans -->
// console.log(plane.includes(`A320`)); // true
// console.log(plane.includes(`Boeng`)); // false
// console.log(plane.startsWith(`Air`)); // false

// if (plane.startsWith(`Airbus`) && plane.endsWith(`neo`)) {
//   console.log(`Part of the NEW Airbus family`);
// }

// Practice Excercise
// const checkBaggage = function (items) {
// lowercase makes things easier to compare!
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
//     console.log(`You are not allowed aboard!`);
//   } else {
//     console.log(`Welcome aboard!`);
//   }
// };

// checkBaggage(`I have a laptop, some food, and a pocket Knife`);
// checkBaggage(`Socks and Camera`);
// checkBaggage(`Snacks and a gun for protection`);

// <--------- Working with Strings - Part 3 --------->

// Split and Join -->
// console.log(`a+very+nice+string`.split(`+`));
// (4) ['a', 'very', 'nice', 'string']
// console.log(`Jonas Schmedtmann`.split(` `));
// 2) ['Jonas', 'Schmedtmann']
// const [firstName, lastName] = `Jonas Schmedtmann`.split(` `);

// const newName = [`Mr`, firstName, lastName.toUpperCase()].join(` `);
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(` `); // split by the space
//   const capitalizedName = [];

//   for (const n of names) {
//     capitalizedName.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(capitalizedName.join(` `));
// };

// const passenger = `Jessica Ann Smith Davis`;
// capitalizeName(`joshua alvarado`);
// capitalizeName(`lissandra pereira`);

// Padding Method
// const message = `Go to gate 23!`;
// console.log(message.padStart(25, `/`)); ///////////Go to gate 23!
// console.log(message.padStart(25, `/`).length); // 25
// can also pad the end of the string

// const maskCreditCard = function (number) {
// have to convert number to a string
// can also use const str = String();
//   const str = number + ``; // will turn number into string // when a number of an operant is a string it becomes a string
//   const last = str.slice(-4);
//   return last.padStart(str.length, `*`);
// };

// console.log(maskCreditCard(4060758899084567)); //************4567

// Repeat Method
// Repeats the same string multiple times
// const msg = `Bad Weather... All Departues Delayed... `;
// console.log(msg.repeat(5)); // repeats the message 5 times

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${`🛩️ `.repeat(n)}`);
// };

// planesInLine(5); // There are 5 planes in line 🛩️ 🛩️ 🛩️ 🛩️ 🛩️
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Coding Challenge #4
// write a program that recieves a list of varialbe names written in underscore_case and convert them to camelcase
// the input will come from a text area inserted into the DOM and conversion will happen when the button is pressed

// Test Data
/*
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// attach event handler to the button
// document.querySelector(`button`).addEventListener(`click`, function () {
//   const text = document.querySelector(`textarea`).value;
//   const rows = text.split(`\n`); // for line break
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split(`_`);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;

//     console.log(`${output.padEnd(20)}${`✅`.repeat(i + 1)}`);
//   }
// });

// <--------- Strings Methods Practice --------->

const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30`;

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split(`+`)) {
  const [type, from, to, time] = flight.split(`;`);
  const output = `${type.startsWith(`_Delayed`) ? `🔴` : ``} ${type.replaceAll(
    `_`,
    ` `
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    `:`,
    `h`
  )})`.padStart(35);
  console.log(output);
}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
