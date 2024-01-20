/**
 * @param {Question27}
 * Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
 */
function alien(color) {
    if (color === "green") {
        console.log("You just earned 15 points for shooting the green alien.");
    }
    else if (color === "yellow") {
        console.log("You just earned 10 points for shooting the yellow alien.");
    }
    else if (color === "red") {
        console.log("You just earned 5 points for shooting the red alien.");
    }
    else {
        console.log("Nice try, but you don't have earned any points for shooting");
    }
}
alien("green");
alien("yellow");
alien("greBB");
alien("red");
