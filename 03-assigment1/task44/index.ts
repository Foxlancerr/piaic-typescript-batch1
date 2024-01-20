/**
 * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
 */

type Sandwich = (...items: string[]) => void;

const orderSandwich: Sandwich = (...items: string[]) => {
  const sandwichSummery: string[] = [];

  for (let i = 0; i < items.length; i++) {
    sandwichSummery.push(items[i]);
  }

  console.log("\nSandwich Summery: ")
  for (let sandwich of sandwichSummery) {
    console.table("- " + sandwich);
  }
};
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese");
orderSandwich("Peanut Butter", "Jelly", "Bread");
