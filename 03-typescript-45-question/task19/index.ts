/**
 * @param { Question 19}
 * Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
 */

let guestList: string[];
let totalGuestInvited: number = 0;

guestList = ["kamran", "sudais", "abuzar"];
totalGuestInvited = guestList.length;

// not available guest names are
let guestNotAvailable: string = "sudais";
console.log(
  "Due to some Personal Issue, " + guestNotAvailable + " guest not available\n"
);

let indexOfGuestNotAvailable: number = guestList.indexOf(guestNotAvailable);

// check if the guest is available or not
if (indexOfGuestNotAvailable !== -1) {
  guestList[indexOfGuestNotAvailable] = "imran";
  totalGuestInvited += 1;
}

for (const guest of guestList) {
  let inviteMsg: string = `Dear ${guest}, You are invited to jion this event`;
  console.log(inviteMsg);
}

console.log(
  "\nI found the bigger dinner table and lets invite 3 more friends\n\n"
);

//first index
guestList.unshift("Mustafa");

// middle index
let middleIndex: number = Math.round(guestList.length / 2);
guestList.splice(middleIndex, 0, "fiazan");

// last index
guestList.push("sadeeq");

totalGuestInvited += 3;

for (const guest of guestList) {
  let inviteMsg: string = `Respected ${guest}, I can found the new Biggest table,Pl jion it`;
  console.log(inviteMsg);
}
console.log("\n");

console.log(
  "Sorry! we have less space available and we only invite two people"
);

// console.log(guestList.length);

let i: number = 0;
while (i <= guestList.length - 3) {
  let removeGuest: string | undefined = guestList.pop();
  console.log(
    `you’re sorry Mr.s ${removeGuest} you can’t invite them to dinner`
  );
}

console.log("\n");
for (let guest of guestList) {
  console.log(`Dear Mr ${guest} letting them know they’re still invited.`);
}

guestList.splice(0, 2);
// console.log(guestList);
console.log('\n')

// here the total guest count is
console.log(
  `The total number of invited guest for dinner is ${totalGuestInvited}`
);
