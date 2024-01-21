/**
 * @param {More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
 *
 * Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
 *
 * • Add one new guest to the beginning of your array.
 * • Add one new guest to the middle of your array.
 * • Use append() to add one new guest to the end of your list.
 * • Print a new set of invitation messages, one for each person in your list.}
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
