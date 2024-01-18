/**
 * @param {Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
 *
 * • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
 * • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
 * • Print a message to each of the two people still on your list, letting them know they’re still invited.
 * • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.}
 */
var guestList;
guestList = ["kamran", "sudais", "abuzar"];
// not available guest names are
var guestNotAvailable = "sudais";
console.log("Due to some Personal Issue, " + guestNotAvailable + " guest not available\n");
var indexOfGuestNotAvailable = guestList.indexOf(guestNotAvailable);
// check if the guest is available or not
if (indexOfGuestNotAvailable !== -1) {
    guestList[indexOfGuestNotAvailable] = "imran";
}
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    var inviteMsg = "Dear ".concat(guest, ", You are invited to jion this event");
    console.log(inviteMsg);
}
console.log("\nI found the bigger dinner table and lets invite 3 more friends\n\n");
//first index
guestList.unshift("Mustafa");
// middle index
var middleIndex = Math.round(guestList.length / 2);
guestList.splice(middleIndex, 0, "fiazan");
// last index
guestList.push("sadeeq");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    var inviteMsg = "Respected ".concat(guest, ", I can found the new Biggest table,Pl jion it");
    console.log(inviteMsg);
}
console.log("\n");
console.log("Sorry! we have less space available and we only invite two people");
console.log(guestList.length);
var i = 0;
while (i <= guestList.length - 3) {
    var removeGuest = guestList.pop();
    console.log("you\u2019re sorry Mr.s ".concat(removeGuest, " you can\u2019t invite them to dinner"));
}
console.log('\n\n');
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var guest = guestList_3[_b];
    console.log("Dear Mr ".concat(guest, " letting them know they\u2019re still invited."));
}
guestList.splice(0, 2);
console.log(guestList);
