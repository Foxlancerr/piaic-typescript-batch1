/**
 * @param { Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.}
*/

let whiteSpaceIncluded:string = "    \n \n Hello world     ";
console.log(whiteSpaceIncluded);
console.log(whiteSpaceIncluded.trim());

//run in ES2022 and only on JS file
// console.log(whiteSpaceIncluded.trimEnd());
// console.log(whiteSpaceIncluded.trimStart());