/**
 * Assertion
 * @param { as keyword is used for type Assertion}
 */

type A = string;
type B = string | number;
type C = number;

let a: A = "ABC";
// let b = a
// b = 34
let b = a as B;
b = 34;

let c = "javascript" as B;

b = a;
// a = b  // not possible

let d = <A>"hi";
// d = 45;

let bool = <
