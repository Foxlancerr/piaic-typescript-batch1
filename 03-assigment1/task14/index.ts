/**
 * @param {Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.}
 */
let guestList: string[];

guestList = ["kamran", "sudais", "abuzar"];

// not available guest names are
let guestNotAvailable: string = "sudais";

let indexOfGuestNotAvailable: number = guestList.indexOf(guestNotAvailable);
console.log(indexOfGuestNotAvailable);

// check if the guest is available or not
if (indexOfGuestNotAvailable !== -1) {
  guestList.splice(indexOfGuestNotAvailable, 1);
}

// new guest
guestList.push("imran");

for (const guest of guestList) {
  let inviteMsg: string = `Dear ${guest}, You are invited to jion this event`;
  console.log(inviteMsg);
}
