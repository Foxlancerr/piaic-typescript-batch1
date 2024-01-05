/**
 *  @param {Sort array method}
 * ***********************************************************************
 * */

// sorted Numbers
const fruit: number[] = [8, 2, 6, 3, 1, 7, 5, 4];
fruit.sort();
// console.log(fruit[fruit.length - 1]);

// the sort function also can take a callback function
// decending order
fruit.sort((a: number, b: number) => b - a);
console.log(fruit);

// Acending order
fruit.sort((a: number, b: number) => a - b);
console.log(fruit);




/**
 *  @param {Reduce arrays methods}
 * ***********************************************************************
 * */

// The reduce() method executes a reducer function on each element of the array and returns a single output value.
// arr.reduce(callback(accumulator, currentValue), initialValue)

// Reduce comes with some terminology such as reducer & accumulator.
// The accumulator is the value that we end with
// and the reducer is what action we will perform in order to get to one value.

// You must remember that a reducer will only return one value and one value only hence the name reduce.

// old way to add a numbers
let value = 0;
const num1 = [5, 10, 15];

for (let i = 0; i < num1.length; i++) {
  value += num1[i];
}

// with the help of reducers
/* this is our initial value i.e. the starting point*/
const initialValue = 0;

/* numbers array */
const num2 = [5, 10, 15];

/* reducer method that takes in the accumulator and next item */
const reducer = (accumulator: number, item: number) => {
  return accumulator + item;
};

/* we give the reduce method our reducer function
  and our initial value */
const total = num2.reduce(reducer, initialValue);


// Flattening an Array Using reducer
const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];

function flattenArray(data:any) {
  // our initial value this time is a blank array
  let initialValue:any = [];

  // call reduce on our data
  return data.reduce((total:any, value:number) => {
    // if the value is an array then recursively call reduce
    // if the value is not an array then just concat our value
    return total.concat(Array.isArray(value) ? flattenArray(value) : value);
  }, initialValue);
}