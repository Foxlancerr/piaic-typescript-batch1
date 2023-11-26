/**
 * @param {Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.}
 */
var guestList;
guestList = ["kamran", "sudais", "abuzar"];
// not available guest names are
var guestNotAvailable = "sudais";
console.log("Due to some Personal Issue, " + guestNotAvailable + " guest not available");
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
