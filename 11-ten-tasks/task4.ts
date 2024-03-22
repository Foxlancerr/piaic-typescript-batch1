// convert the string into title case
// the animals == The Animals
// the frames of city == The Frames Of City

const titleCaseCvt = (str: string) => {
  // way1
  //   const strArr = str
  //     .split(" ")
  //     .map((ele) => ele[0].toUpperCase() + ele.slice(1))
  //     .join(" ");

  //   return strArr;

  // way2

  const result = [];
  for (let char of str.split(" ")) {
    result.push(char[0].toUpperCase() + char.slice(1));
  }
  return result.join(" ");
};

console.log(titleCaseCvt("hello this is ahmad"));
