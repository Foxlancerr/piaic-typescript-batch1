/**
 * @param { Question 43}
 * Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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
function make_great(arr) {
    var spreadArray = arr.slice(0, arr.length);
    for (var i = 0; i < spreadArray.length; i++) {
        spreadArray[i] = "Wow! Great, Wonderful Mr. ".concat(spreadArray[i], ".");
    }
    return spreadArray;
}
show_magicians(magicianNames);
var changeArr = make_great(magicianNames);
show_magicians(changeArr);
show_magicians(magicianNames);
