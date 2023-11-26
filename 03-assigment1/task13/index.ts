/**
 * @param {Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.}
 */

let guestList: string[];

guestList = ["kamran", "sudais", "abuzar"];
for (const guest of guestList) {
  let inviteMsg: string = `Dear ${guest}, You are invited to jion this event`;
  console.log(inviteMsg);
}
