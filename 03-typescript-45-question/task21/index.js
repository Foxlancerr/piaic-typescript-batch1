/**
 * @param {Question 21}
 * They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 */
var countries = [];
var bestCountries = [
    { name: "United States", area: 600 },
    { name: "London", area: 800 },
    { name: "america", area: 700 },
];
for (var i = 0; i < bestCountries.length; i++) {
    countries.push(bestCountries[i]);
    console.log();
}
var moreLikeCountries = [
    { name: "Saudia", area: 600 },
    { name: "Malasysai", area: 800 },
    { name: "Nigeria", area: 700 },
];
for (var i = 0; i < moreLikeCountries.length; i++) {
    countries.push(moreLikeCountries[i]);
}
console.log(countries);
// later i will fixed that
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     city: 'New York',
//   };
// let store = Object.entries(person)
// console.log(store)
