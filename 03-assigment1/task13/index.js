/**
 * @param {Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.}
 */
var guestList;
guestList = ["kamran", "sudais", "abuzar"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    var inviteMsg = "Dear ".concat(guest, ", You are invited to jion this event");
    console.log(inviteMsg);
}
