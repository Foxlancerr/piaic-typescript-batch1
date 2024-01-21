/**
 * @param {Question 22}
 * Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
 */
//Intentianal Error is such type of Error like Bug or Mistake (out of bounds index value access)
var marks = [20, 34, 56, 90];
var incorrectIndex = 10;
if (incorrectIndex > 0 && incorrectIndex < marks.length) {
    console.log("The marks at Specific index is: " + marks[incorrectIndex]);
}
else {
    console.log("out of bounds (no index present)");
}
