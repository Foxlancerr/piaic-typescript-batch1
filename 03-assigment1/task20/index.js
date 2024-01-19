/**
 * @param {Question 20}
 * Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 */
var cities = [];
var likeCities = ["New York", "Bangkok", "danmark", "San Francisco"];
for (var i = 0; i < likeCities.length; i++) {
    cities.push(likeCities[i]);
}
var moreLikeCities = ["peshawar", "mardan", "queta", "Multan"];
for (var i = 0; i < moreLikeCities.length; i++) {
    cities.push(moreLikeCities[i]);
}
console.log("List of cities: ".concat(cities.join(', ')));
