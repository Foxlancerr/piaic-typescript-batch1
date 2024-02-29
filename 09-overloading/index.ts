// In here we can deal with function overloading

function sayHello(name: string): string;
function sayHello(name: string[]): string[];
function sayHello(name: unknown): unknown {
  if (typeof name === "string") {
    return `Hello there, ${name}!`;
  } else if (Array.isArray(name)) {
    return name.map((name) => `Hello, ${name}!`);
  }
  throw new Error("Something went wrong");
}

// console.log(sayHello("kmaran"));
// console.log(sayHello(["zafar,imran"]));

// *****************************************************************
//example 2
type TPerson = {
  name: string;
  age: number;
};

function getPerson(name: string): TPerson;
function getPerson(age: number): TPerson[];
function getPerson(query: string | number): TPerson | TPerson[] {
  if (typeof query === "string") {
    return { name: query, age: 34 };
  } else {
    return [
      { name: "Alice", age: query },
      { name: "Bob", age: query },
    ];
  }
}

// console.log(getPerson("sudais"));
// console.log(getPerson(45));

// ***************************************************

/**
 * Sure, here's a description of a task relevant to function overloading:

**Task Description: Function Overloading**

You are tasked with implementing a utility function `formatData` that formats different types of data into a string representation. The function should support overloads for various data types, including strings, numbers, arrays, and objects. Each overload should handle the specific data type and format it appropriately.

- **String Overload**: Accepts a string parameter and returns the string as is.
- **Number Overload**: Accepts a number parameter and returns the number formatted as a string with two decimal places.
- **Array Overload**: Accepts an array parameter and returns a string representation of the array elements separated by commas.
- **Object Overload**: Accepts an object parameter and returns a string representation of key-value pairs.

Your task is to define the function overloads and implement the logic for each overload to handle the specified data types accordingly. Ensure that the function behaves correctly for different input types and produces the expected output.

This task requires understanding how to define and implement function overloads in TypeScript, as well as handling different data types appropriately within each overload. It also involves considering edge cases and ensuring the function behaves as expected for various input scenarios.
 */

function formatData(input: string): string;
function formatData(input: number): string;
function formatData(input: any[]): string;
function formatData(input: object): string;
function formatData(input: any): string {
  if (typeof input === "string") {
    return input;
  } else if (typeof input === "number") {
    return input.toFixed(2);
  } else if (Array.isArray(input)) {
    return input.join(",");
  } else if (typeof input === "object") {
    return Object.entries(input)
      .map((key, value) => `${key}:${value}`)
      .join(",");
  } else {
    return "Invalid output";
  }
}

console.log(formatData("kamran"))
console.log(formatData(45))
console.log(formatData([34,23,67,"age","city"]))
console.log(formatData({
    age:34,
    city:"pesh",
}))