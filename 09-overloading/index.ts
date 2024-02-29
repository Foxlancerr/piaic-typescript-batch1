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

console.log(getPerson("sudais"));
console.log(getPerson(45));
