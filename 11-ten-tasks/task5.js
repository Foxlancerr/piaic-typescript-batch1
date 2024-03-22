// count the vowels present in the string and remove all punctualtion and specail charactes
// a,e,i,o,u
var countVowelInString = function (str) {
    // way 1
    var matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
};
console.log(countVowelInString("aaabcdkkkghii"));
