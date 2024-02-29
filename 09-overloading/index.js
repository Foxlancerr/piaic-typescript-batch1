"use strict";
// In here we can deal with function overloading
function sayHello(name) {
    if (typeof name === "string") {
        return `Hello there, ${name}!`;
    }
    else if (Array.isArray(name)) {
        return name.map((name) => `Hello, ${name}!`);
    }
    throw new Error("Something went wrong");
}
function getPerson(query) {
    if (typeof query === "string") {
        return { name: query, age: 34 };
    }
    else {
        return [
            { name: "Alice", age: query },
            { name: "Bob", age: query },
        ];
    }
}
function formatData(input) {
    if (typeof input === "string") {
        return input;
    }
    else if (typeof input === "number") {
        return input.toFixed(2);
    }
    else if (Array.isArray(input)) {
        return input.join(",");
    }
    else if (typeof input === "object") {
        return Object.entries(input)
            .map((key, value) => `${key}:${value}`)
            .join(",");
    }
    else {
        return "Invalid output";
    }
}
console.log(formatData("kamran"));
console.log(formatData(45));
console.log(formatData([34, 23, 67, "age", "city"]));
console.log(formatData({
    age: 34,
    city: "pesh",
}));
