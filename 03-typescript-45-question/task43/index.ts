/**
 * @param { Question 43}
 * Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
 */

let magicianNames: string[] = [
  "Magicians1",
  "Magicians2",
  "Magicians3",
  "Magicians4",
];
function show_magicians(arr: string[]): void {
  for (let value of arr) {
    console.log(value);
  }
}

function make_great(arr: string[]): string[] {
  const spreadArray = arr.slice(0, arr.length);
  for (let i = 0; i < spreadArray.length; i++) {
    spreadArray[i] = `Wow! Great, Wonderful Mr. ${spreadArray[i]}.`;
  }
  return spreadArray;
}
show_magicians(magicianNames);
const changeArr = make_great(magicianNames);
show_magicians(changeArr);
show_magicians(magicianNames);
