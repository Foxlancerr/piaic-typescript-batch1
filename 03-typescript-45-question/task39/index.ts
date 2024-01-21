/**
 * City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
 */

type CityFunction = (city: string, country: string) => string;

let city_country: CityFunction = function (city, country) {
  return `${city}, ${country}`;
};

console.log(city_country("Lahour", "Pakistan"));
console.log(city_country("Mumbia", "India"));
