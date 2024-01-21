/**
 * @param {question 32}
 * Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */
var current_users = ["John", "Elice", "Smith", "Bob"];
var new_users = ["smith", "Babuu", "Kami", "John"];
var _loop_1 = function (i) {
    var lowercaseNewUser = new_users[i].toLowerCase();
    if (current_users.some(function (user) { return user.toLowerCase() === lowercaseNewUser; })) {
        console.log("Username '".concat(new_users[i], "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! Username '".concat(new_users[i], "' is available."));
    }
};
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
