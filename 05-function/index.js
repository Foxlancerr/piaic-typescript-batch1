"use strict";
/**
 * Function typing in typeScript
 */
let addNumberInterface = (number1, number2) => number1 + number2;
addNumberInterface(10, 10);
const addNumberType = function (number1, number2) {
    return number1 + number2;
};
addNumberType(20, 20);
// default values
function sub(num1 = 10, num2) {
    return num1 - num2;
}
// console.log(sub(10, 5));
// console.log(sub(undefined, 5));
function restParameter(...args) {
    return args.reduce((prev, next) => prev + next);
}
// console.log(restParameter(2, 3, 5, 5, 5));
// optional parameter
function optionalParameter(n1, n2, n3) {
    if (typeof n3 !== "undefined") {
        return n1 + n2 + n3;
    }
    return n1 + n2;
}
// console.log(optionalParameter(2, 3, 5));
// console.log(optionalParameter(2, 3));
// never type
// Error occurs, or infinite loop when we hover both it will show the never
const throwError = (message) => {
    throw new Error(message);
};
// throwError("Error occurred");
const infiniteLoop = () => {
    let i = 0;
    while (true) {
        i++;
    }
};
// callback function typing
const totalResult = (num1, callback) => {
    return callback(num1);
};
const addNumber = (num1) => {
    return num1 + 10;
};
const result = totalResult(20, addNumber);
const totalResult2 = (num1, callback) => {
    return callback(num1);
};
const addNumber2 = (num1) => {
    return num1 + 10;
};
const result2 = totalResult(20, addNumber);
// console.log(result2);
// *****************************************************
const fetchData = (num1) => {
    return new Promise((resolve, reject) => {
        if (num1 == 10) {
            resolve("This is resolved successfully");
        }
        else {
            reject("Promise is rejected");
        }
    });
};
// fetchData(10)
//   .then((data) => {
//     console.log("Fetching data...", data);
//   })
//   .catch((err) => {
//     console.log("Fetching data failed because: ", err);
//   });
// **************************************************************
// Mutate Array functions
const mutateArray = (nums, callback) => {
    return nums.map(callback);
};
const mutateArray1 = (nums, callback) => {
    return nums.map(callback);
};
console.log(mutateArray1([1, 2, 3, 4, 5], (v) => {
    return v * 50;
}));
