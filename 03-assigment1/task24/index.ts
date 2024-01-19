/**
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

let items = [23, 45, 23, 6, 53];
items[0] == 34 ? console.log("true") : console.log("false");
items[0] !== 34 ? console.log("true") : console.log("false");
items.length > 0 ? console.log("true") : console.log("false");
items[0] == 34 && items[3] == 34 ? console.log("true") : console.log("false");
items[0] == 34 || items[1] == 23 ? console.log("true") : console.log("false");
items.includes(23) ? console.log("true") : console.log("false");
