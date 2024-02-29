"use strict";
/**
 * @param {Question 45}
 * Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 */
const createModel = (manufacturer, modelName, ...args) => {
    let carObj = {
        manufacturer,
        modelName,
    };
    for (let i = 0; i < args.length; i += 2) {
        let key = args[i];
        let val = args[i + 1];
        // console.log(key,val)
        carObj[key] = val; // some error occurs but i fixed that
    }
    return carObj;
};
console.log(createModel("Apple", "pro10", "samsung", "a20"));
