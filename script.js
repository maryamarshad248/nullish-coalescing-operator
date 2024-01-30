'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
      open: 12,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = '20:00',
    address,
  }) {
    console.log(`order Received! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};

// nullish coalescing operator include( null and undefined) but does not
// include (0 and "")

console.log(0 ?? 10);
console.log(null ?? 5);
console.log(undefined ?? 'maryam');

//restaurant.numguests = 0;
//restaurant.numguests = null;
restaurant.numguests = undefined;
const guests = restaurant.numguests ?? 20;
console.log(guests);
