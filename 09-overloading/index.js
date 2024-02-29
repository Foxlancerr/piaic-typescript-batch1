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
console.log(getPerson("sudais"));
console.log(getPerson(45));
