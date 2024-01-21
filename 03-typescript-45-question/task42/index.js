/**
 * Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 */
var magicianNames = [
    "Magicians1",
    "Magicians2",
    "Magicians3",
    "Magicians4",
];
function show_magicians(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        console.log(value);
    }
}
show_magicians(magicianNames);
function make_great(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = "Wow! Great, Wonderful Mr. ".concat(arr[i], ".");
    }
}
make_great(magicianNames);
show_magicians(magicianNames);
console.log(magicianNames);
