"use strict";
/**
 * Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */
let magicianNames = [
    "Magicians1",
    "Magicians2",
    "Magicians3",
    "Magicians4",
];
function show_magicians(arr) {
    for (let value of arr) {
        console.log(value);
    }
}
show_magicians(magicianNames);
