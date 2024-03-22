"use strict";
// given a string, and return that string which is most commonly used it.
// kamraaaan  == a
// zakkkkkkkii == k
function maxChar(str) {
    let mapChar = {};
    let max = 0;
    let maxChar = "";
    for (let char of str) {
        if (mapChar[char]) {
            mapChar[char] = mapChar[char] + 1;
        }
        else {
            mapChar[char] = 1;
        }
    }
    for (let char in mapChar) {
        if (mapChar[char] > max) {
            max = mapChar[char];
            maxChar = char;
        }
    }
    //   for (const [key, value] of Object.entries(mapChar)){
    //     console.log(key, value);
    //   }
    return maxChar;
}
console.log(maxChar("kamraaaaaan"));
console.log(maxChar("imraaannnnkkkhan"));
