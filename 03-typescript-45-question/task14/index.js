"use strict";
/**
 * @param {Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.}
 */
let guestList;
guestList = ["kamran", "sudais", "abuzar"];
// not available guest names are
let guestNotAvailable = "sudais";
console.log("Due to some Personal Issue, " + guestNotAvailable + " guest not available");
let indexOfGuestNotAvailable = guestList.indexOf(guestNotAvailable);
// check if the guest is available or not
if (indexOfGuestNotAvailable !== -1) {
    guestList[indexOfGuestNotAvailable] = "imran";
}
for (const guest of guestList) {
    let inviteMsg = `Dear ${guest}, You are invited to jion this event`;
    console.log(inviteMsg);
}
