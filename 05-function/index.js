/**
 * Function typing in typeScript
 */
var addNumberInterface = function (number1, number2) { return number1 + number2; };
addNumberInterface(10, 10);
var addNumberType = function (number1, number2) {
    return number1 + number2;
};
addNumberType(20, 20);
// default values
function sub(num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    return num1 - num2;
}
// console.log(sub(10, 5));
// console.log(sub(undefined, 5));
function restParameter() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, next) { return prev + next; });
}
// console.log(restParameter(2, 3, 5, 5, 5));
// optional parameter
function optionalParameter(n1, n2, n3) {
    if (typeof n3 !== "undefined") {
        return n1 + n2 + n3;
    }
    return n1 + n2;
}
console.log(optionalParameter(2, 3, 5));
console.log(optionalParameter(2, 3));
