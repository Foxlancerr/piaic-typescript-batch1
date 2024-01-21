/**
 * @param {Question 29}
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */
var fruit = ["apple", "orange", "banana", "mango", "pineapple"];
if (fruit.indexOf("apple") !== -1) {
    console.log("You really like delicious apple!");
}
if (fruit.indexOf("orange") !== -1) {
    console.log("You really like delicious orange!");
}
if (fruit.indexOf("banana") !== -1) {
    console.log("You really like delicious banana!");
}
if (fruit.indexOf("mango") !== -1) {
    console.log("You really like delicious mango!");
}
if (fruit.indexOf("pineapple") !== -1) {
    console.log("You really like delicious pineapple!");
}
