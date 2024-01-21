/**
 * @param { Question 19}
 * Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
 */
var guestList;
var totalGuestInvited = 0;
guestList = ["kamran", "sudais", "abuzar"];
totalGuestInvited = guestList.length;
// not available guest names are
var guestNotAvailable = "sudais";
console.log("Due to some Personal Issue, " + guestNotAvailable + " guest not available\n");
var indexOfGuestNotAvailable = guestList.indexOf(guestNotAvailable);
// check if the guest is available or not
if (indexOfGuestNotAvailable !== -1) {
    guestList[indexOfGuestNotAvailable] = "imran";
    totalGuestInvited += 1;
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
totalGuestInvited += 3;
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    var inviteMsg = "Respected ".concat(guest, ", I can found the new Biggest table,Pl jion it");
    console.log(inviteMsg);
}
console.log("\n");
console.log("Sorry! we have less space available and we only invite two people");
// console.log(guestList.length);
var i = 0;
while (i <= guestList.length - 3) {
    var removeGuest = guestList.pop();
    console.log("you\u2019re sorry Mr.s ".concat(removeGuest, " you can\u2019t invite them to dinner"));
}
console.log("\n");
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var guest = guestList_3[_b];
    console.log("Dear Mr ".concat(guest, " letting them know they\u2019re still invited."));
}
guestList.splice(0, 2);
// console.log(guestList);
console.log('\n');
// here the total guest count is
console.log("The total number of invited guest for dinner is ".concat(totalGuestInvited));
