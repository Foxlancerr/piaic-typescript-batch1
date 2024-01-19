/**
 * @param {Question 23}
 * Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */

let car: string = "subarku";

car === "subarku"
  ? console.log("I predict True")
  : console.log("I predict False");

car !== "subarku"
  ? console.log("I predict True")
  : console.log("I predict False");

car = "Xli";
car !== "subarku"
  ? console.log("I predict True")
  : console.log("I predict False");

car !== "Xli" ? console.log("I predict True") : console.log("I predict False");

car.length > 0 ? console.log("I predict True") : console.log("I predict False");

car = "suzuki";

car === "suZuki"
  ? console.log("I predict True")
  : console.log("I predict False");

car.length > 0 ? console.log("I predict True") : console.log("I predict False");

car.length == 0 ? console.log("I predict True") : console.log("I predict False");

car.length < 0 ? console.log("I predict True") : console.log("I predict False");

car === "suZuki"
  ? console.log("I predict True")
  : console.log("I predict False");