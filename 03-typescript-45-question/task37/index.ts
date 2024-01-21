/**
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */
function make_shirt(
  size: number | string = "large",
  msg: string = "I love typescipt"
): void {
  console.log(
    "The size of the shirt is: " +
      size +
      " and the text of the shirt is: " +
      msg
  );
}

make_shirt();
make_shirt("medium");
make_shirt(34, "i really like it");
