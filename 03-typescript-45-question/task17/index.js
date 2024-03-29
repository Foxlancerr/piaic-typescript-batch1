"use strict";
/**
 * @param {Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
 *
 * • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
 * • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
 * • Print a message to each of the two people still on your list, letting them know they’re still invited.
 * • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.}
 */
let guestList;
guestList = ["kamran", "sudais", "abuzar"];
// not available guest names are
let guestNotAvailable = "sudais";
console.log("Due to some Personal Issue, " + guestNotAvailable + " guest not available\n");
let indexOfGuestNotAvailable = guestList.indexOf(guestNotAvailable);
// check if the guest is available or not
if (indexOfGuestNotAvailable !== -1) {
    guestList[indexOfGuestNotAvailable] = "imran";
}
for (const guest of guestList) {
    let inviteMsg = `Dear ${guest}, You are invited to jion this event`;
    console.log(inviteMsg);
}
console.log("\nI found the bigger dinner table and lets invite 3 more friends\n\n");
//first index
guestList.unshift("Mustafa");
// middle index
let middleIndex = Math.round(guestList.length / 2);
guestList.splice(middleIndex, 0, "fiazan");
// last index
guestList.push("sadeeq");
for (const guest of guestList) {
    let inviteMsg = `Respected ${guest}, I can found the new Biggest table,Pl jion it`;
    console.log(inviteMsg);
}
console.log("\n");
console.log("Sorry! we have less space available and we only invite two people");
// console.log(guestList.length);
let i = 0;
while (i <= guestList.length - 3) {
    let removeGuest = guestList.pop();
    console.log(`you’re sorry Mr.s ${removeGuest} you can’t invite them to dinner`);
}
console.log('\n');
for (let guest of guestList) {
    console.log(`Dear Mr ${guest} letting them know they’re still invited.`);
}
guestList.splice(0, 2);
console.log(guestList);
