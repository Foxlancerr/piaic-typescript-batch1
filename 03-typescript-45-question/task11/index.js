/**
 * @param {Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.}
*/
var strName = ["ahmad", "sudais", "mustafa", "qadeer"];
for (var i = 0; i < strName.length; i++) {
    console.log("The No".concat(i, " freind name is: ").concat(strName[i]));
}
