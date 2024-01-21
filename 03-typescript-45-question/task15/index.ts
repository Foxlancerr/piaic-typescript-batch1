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

let guestList: string[];

guestList = ["kamran", "sudais", "abuzar"];

// not available guest names are
let guestNotAvailable: string = "sudais";
console.log(
  "Due to some Personal Issue, " + guestNotAvailable + " guest not available\n"
);

let indexOfGuestNotAvailable: number = guestList.indexOf(guestNotAvailable);

// check if the guest is available or not
if (indexOfGuestNotAvailable !== -1) {
  guestList[indexOfGuestNotAvailable] = "imran";
}

for (const guest of guestList) {
    let inviteMsg: string = `Dear ${guest}, You are invited to jion this event`;
    console.log(inviteMsg);
  }

console.log("\nI found the bigger dinner table and lets invite 3 more friends\n\n");

//first index
guestList.unshift("Mustafa");

// middle index
let middleIndex:number = Math.round(guestList.length / 2)
guestList.splice(middleIndex,0,"fiazan")

// last index
guestList.push("sadeeq")

for (const guest of guestList) {
  let inviteMsg: string = `Respected ${guest}, I can found the new Biggest table,Pl jion it`;
  console.log(inviteMsg);
}
