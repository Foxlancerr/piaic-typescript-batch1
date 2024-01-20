/**
 * @param {Question 45}
 * Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var createModel = function (manufacturer, modelName) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var carObj = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var i = 0; i < args.length; i += 2) {
        var key = args[i];
        var val = args[i + 1];
        // console.log(key,val)
        carObj[key] = val; // some error occurs but i fixed that
    }
    return carObj;
};
console.log(createModel("Apple", "pro10", "samsung", "a20"));
var value = [2, 3, 2, 7, 5, 5, 2];
var operator = ["*", "/", "+", "-", '+', "*"];
var shallowArr = __spreadArray([], value, true);
for (var i = 0; i < value.length; i++) {
    switch (operator[i]) {
        case "*":
            shallowArr[0] = shallowArr[0] * shallowArr[1];
            shallowArr.splice(1, 1);
            console.log(shallowArr);
            break;
        case "/":
            shallowArr[0] = shallowArr[0] / shallowArr[1];
            shallowArr.splice(1, 1);
            console.log(shallowArr);
            break;
        case "+":
            shallowArr[0] = shallowArr[0] + shallowArr[1];
            shallowArr.splice(1, 1);
            console.log(shallowArr);
            break;
        case "-":
            shallowArr[0] = shallowArr[0] - shallowArr[1];
            shallowArr.splice(1, 1);
            console.log(shallowArr);
            break;
    }
}
var total = shallowArr[0];
console.log(total);
