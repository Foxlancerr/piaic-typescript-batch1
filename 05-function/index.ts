/**
 * Function typing in typeScript
 */

// using interface
interface AddInterface {
  (number1: number, number2: number): number;
}

let addNumberInterface: AddInterface = (number1, number2) => number1 + number2;

addNumberInterface(10, 10);

// using type
type AddType = (number1: number, number2: number) => number;

const addNumberType: AddType = function (number1, number2) {
  return number1 + number2;
};

addNumberType(20, 20);

// default values
function sub(num1: number = 10, num2: number) {
  return num1 - num2;
}
// console.log(sub(10, 5));
// console.log(sub(undefined, 5));

function restParameter(...args: number[]): number {
  return args.reduce((prev, next) => prev + next);
}

// console.log(restParameter(2, 3, 5, 5, 5));

// optional parameter
function optionalParameter(n1: number, n2: number, n3?: number): number {
  if (typeof n3 !== "undefined") {
    return n1 + n2 + n3;
  }
  return n1 + n2;
}
// console.log(optionalParameter(2, 3, 5));
// console.log(optionalParameter(2, 3));

// never type
// Error occurs, or infinite loop when we hover both it will show the never

const throwError = (message: string) => {
  throw new Error(message);
};

// throwError("Error occurred");

const infiniteLoop = () => {
  let i = 0;
  while (true) {
    i++;
  }
};

