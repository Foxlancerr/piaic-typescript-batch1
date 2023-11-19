/**
 * @Biggner
 */
/**
 *  @param {create an array and prints its contents.}
 *
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
 *
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
 *
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
