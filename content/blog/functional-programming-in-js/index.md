---
title: Functional Programming in JS ⚡️
date: "2019-06-24T11:04:52.284Z"
description: "In functional programming language, function are values just like strings or numbers, function can be assigned to variable or pass into other functions higher-order."
categories: [JS]
comments: true
image:
  feature: https://images.unsplash.com/photo-1440635592348-167b1b30296f?crop=entropy&dpr=2&fit=crop&fm=jpg&h=475&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1250
  credit: thomas shellberg
  creditlink: https://unsplash.com/photos/Ki0dpxd3LGc
---

## What is Functional Programming?

> Functional programming is a declarative pure functions
> and a programming paradigm in which the function treats as mathematical function style. It also use conditional expressions and recursion to perform computation.

#### Concepts of functional programming:

- Pure functions
- Immutable data
- Decompose the problem into functions
- No side effects
- No mutating state

#### Impure Function vs Pure Function

```js
//Impure Function
let number = 2;
function squareNumber() {
  number = number * number;
  console.log(number);
  return number;
}

//Pure Function
function squareNumber(number) {
  number = number * number;
  return number;
}
```

In functional programming language, function are values just like strings or numbers, function can be assigned to variable or pass into other functions higher-order.

Pass into variable 🤝

```js
var tripe = function triple(x) {
  return x * 3;
};
console.log(tripe(30));
```

### HIGHER ORDER FUNCTION

A function that take other function as argument.
Two level of function (composition)

Function inside another function allow us to compose a lot of small function into bigger function.

###### Example #1

```js
var animals = [
{name: 'Fluffykins', species: 'rabbit'},
{name: 'Caro', species: 'dog'},
{name: 'Hamilton', species: 'dog'},
{name: 'Harold', species: 'fish'},
{name: 'Ursula', species: 'cat'},
{name: 'Jimmy', species: 'fish'},
]

//filter animal
var dog = []
For (var i = 0; i < animals.length; i++)
{
If (animals[i].species === 'dog')
dog.push(animals[i])
}

//filter animal with filter function less code
var dog - animals.filter(function(animal) {
//return new filter array
Return animal.species === 'dog'
})

//pass into variable
Var isDog = function(animal) {
Return animal.species === 'dogs'
}
//higher order function filter
Var dogs = animals.filter(isDog)
Var otherAnimals = animals.reject(isDog)

```

##### Example #2

```js
function sing(callback) {
  console.log("lalala");
  if (callback) {
    callback();
  }
}

function meow() {
  console.log("meow");
}

function setup() {
  sing(function () {
    console.log("moew meow");
  });
}
```

##### Example #3

```js
function multiply(factor) {
  return function (x) {
    return x * factor;
  };
}
let doubler = multiply(2);
let tripler = multiply(3);
doubler(4);
```

### Arrow Function

```js
//pure function
Function sing() {
return console.log('lalala');
}

//arrow function
Function multiply(factor) {
Return x => x * factor
}

Let doubler = multiply(2);
Let tripler = multiply(3);
```
