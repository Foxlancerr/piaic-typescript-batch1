/**
 * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
 */
var orderSandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var sandwichSummery = [];
    for (var i = 0; i < items.length; i++) {
        sandwichSummery.push(items[i]);
    }
    console.log("\nSandwich Summery: ");
    for (var _a = 0, sandwichSummery_1 = sandwichSummery; _a < sandwichSummery_1.length; _a++) {
        var sandwich = sandwichSummery_1[_a];
        console.table("- " + sandwich);
    }
};
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese");
orderSandwich("Peanut Butter", "Jelly", "Bread");
