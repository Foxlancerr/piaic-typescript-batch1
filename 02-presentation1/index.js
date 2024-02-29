"use strict";
/**
 * *******************************************************************
 * @Biggner
 * *******************************************************************
 */
/**
 *  @param {create an array and prints its contents.}
 * ********************************************************************
 * */
const alphabits = ["a", "b", "c", "d", "e"];
console.log(alphabits);
// we can access the array each value by its index and the index start from 0
// 1st index value
console.log(alphabits[0]);
// 2nd index value
console.log(alphabits[1]);
// 3rd index value
console.log(alphabits[2]);
// if we want to print the value from last index so we can used -ive sign to do that
// last index value
console.log(alphabits[alphabits.length - 1]);
// 2nd last index value
console.log(alphabits[alphabits.length - 2]);
/**
 *  @param {Add element to an array}
 *************************************************************************
 * */
// here are two build in functions which will add to elements to an array
// 1 push: it will add element to the last of an array
let num2 = [1, 2, 3];
console.log(num2);
num2.push(4);
console.log(num2);
// 2 unshift: it will add element to the first of an array
num2.unshift(0);
console.log(num2);
/**
 *  @param {Remove element to an array}
 ********************************************************************************
 * */
// there are two build in methods which can help to remove elements from an array
// 1 pop: remove last element from an array
const names = ["ahmad", "sudais", "kamran", "akram"];
console.log(names);
names.pop();
console.log(names);
// 2 shift: remove first element from an array
names.shift();
console.log(names);
/**
 *  @param {Sort element to an array}
 * ***********************************************************************
 * */
// sorted Numbers
const fruit = [8, 2, 6, 3, 1, 7, 5, 4];
// fruit.sort();
console.log(fruit[fruit.length - 1]);
// the sort function also can take a callback function
// decending order
fruit.sort((a, b) => b - a);
console.log(fruit);
// Acending order
fruit.sort((a, b) => a - b);
console.log(fruit);
/**
 *  @param {Loop an arrays}
 * *********************************************************************
 * */
// In JavaScript there are many types of Loops
// 1 For loops
let age = [29, 45, 67, 35, 36, 64];
for (let i = 0; i < age.length; i++) {
    console.log(`index ${i} value is: ${age[i]}`);
}
// 2 for of: will print the values
let month = ["Jan", "Feb", "Mar", "Apr", "May"];
for (const i of month) {
    console.log(i);
}
// 3 for in: will print the keys or Indexed values
for (const i in month) {
    console.log(i);
}
// 4 forEach: it will iterate the list and it will recieve a callback function having three parameters
// function(index, value, currentArray)
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
days.forEach((index, value, currentArray) => {
    console.log(`the index ${index} having value is ${value} and iteration from the array ${currentArray}`);
});
// 5 while and Do-while loop
/**
 * *******************************************************************
 * @Intermediate
 * *******************************************************************
 */
/**
 * @param { Use array methods such as indexOf(), lastIndexOf(), and slice(). }
 * *******************************************************************
 */
// indexOf(): can take the value which we want to search but it starts searching from left to right
const abc = ["a", "b", "c", "d", "z", "b", "k", "d"];
console.log(abc.indexOf("d"));
// lastIndexOf():can take the value which we want to search but it starts searching from last to first
console.log(abc.lastIndexOf("d"));
// slice(): methods can take 2 parameters (start index, last index) and it will mainly used when we delete the items d from the center of the array it will not update the original arrays
// it will create a shallow copy of the array
const items = ["book", "pen", "pencil", "marker"];
let newItems = items.slice(0, 2);
console.log(newItems);
let newItems1 = items.slice(2, 1);
console.log(newItems1);
/**
 * @param { Create a function that takes an array as an input and returns a new array with the elements in reverse order. }
 * *******************************************************************
 */
// reverse(): its is build in function which will reverse the array;
const array1 = [1, 2, 3, 4, 5, 6];
console.log(array1);
array1.reverse();
console.log(array1);
// function which will reverse the array
const array2 = [1, 2, 3, 4, 5, 6];
let reverseArr;
function reverseArrayFunc(arr) {
    reverseArr = arr.reverse();
}
reverseArrayFunc(array2);
console.log("reverse Array is:[" + reverseArr + "]");
/**
 * @param { Write a program that finds the largest and smallest elements in an array. }
 * *******************************************************************
 */
// Javascript have build in Maths module which have some build in methods for finding the largest and smallest elements
let array3 = [45, 23, 60, 45, 84, 89, 90];
// Math.min(): will find the smallest element of an arrays
console.log(Math.min(...array3));
// Math.min(): will find the smallest element of an arrays
console.log(Math.max(...array3));
/**
 * @param { Create a function that checks if an array contains a specific element }
 * *******************************************************************
 */
// the find methods is used to check if an array contains a specific element or not
const names2 = ["sudais", "kamran", "mustafa"];
function findValues(arr, str) {
    return arr.includes(str);
}
const result1 = findValues(names2, "kamran");
const result2 = findValues(names2, "zafar");
console.log(result1);
console.log(result2);
