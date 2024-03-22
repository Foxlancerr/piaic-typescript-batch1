// count the vowels present in the string and remove all punctualtion and specail charactes
// a,e,i,o,u

let countVowelInString = (str: string) => {
    // way 1
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

console.log(countVowelInString("aaabcdkkkghii"))