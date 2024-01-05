/**
 * @param { Question2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.”}
 */
var pName = "sudais";
console.log(pName.toUpperCase());
console.log(pName.toLowerCase());
// charAt will return the index element by provide the index value and its is only apply for string
console.log("world".charAt(0));
// subString will return the new string / split the string and return it.
// and it will take two arguments substrings(start index, End index)
console.log("how are you".substring(0, 2));
function toTitleCase(str) {
    var string = str
        .split(" ")
        .map(function (i) { return i[0].toUpperCase() + i.substring(1).toLowerCase(); })
        .join(" ");
    return string;
}
var toTitle = toTitleCase("hello this is pakistan");
console.log(toTitle);
var letter = "ahmad";
letter.split(",").forEach(function (val, index) {
    console.log(val, index);
});
