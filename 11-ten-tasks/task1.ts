// create a function which check that a given string is polindrom or not.
// abccba == abccba
// madam
// kayak
const polindromCheck: (str: string) => boolean = (str) => {
  const reverseStr: string = str.split("").reverse().join("");
  // way1
  return reverseStr === str;

  // way2
  // if(reverseStr === str) {
  //     return true;
  // }else{
  //     return false
  // }
};
console.log(polindromCheck("madam"));
console.log(polindromCheck("mada"));
