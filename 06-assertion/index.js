"use strict";
/**
 * Assertion
 * @param { as keyword is used for type Assertion}
 */
let a = "ABC";
// let b = a
// b = 34
let b = a;
b = 34;
let c = "javascript";
b = a;
// a = b  // not possible
let d = "hi";
// d = 45;
// const assertions => it will make our contents readonly
let age = 45;
// age = 56 // not possible
let obj1 = {
    name: "kamran",
    age: 34,
};
obj1.name = "malik";
obj1.age = 34; // reassign the same values
// obj1.age = 45 // not possible
let z = { text: "hello" }; // when we hover to z then it will show the readonly
// only apply => to a string, number, boolean, array, or object literal.
// let rand = (Math.random() * 100) as const // show error
