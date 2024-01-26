/**
 * @param {Index Signatue}
 *
 * when we access the data in objects dynamically, we need index Signature,
 * if we see this actually then we first config the tsc (tsc --init)
 */

interface Transaction1 {
  GasBill: number;
  WifiBill: number;
  ElectricityBill: number;
}

const calculateTransaction1: Transaction1 = {
  GasBill: 30,
  WifiBill: 40,
  ElectricityBill: 50,
};
const wifibill: string = "WifiBill";

// this is not allowed here
// calculateTransaction1[wifibill];
// for (let i in calculateTransaction1) {
//   console.log(calculateTransaction1[i]);
// }

// console.log(calculateTransaction1["something"])

// but if yoou use the index signature our issue is fixed
interface Transaction2 {
  [key: string]: number; // index signature
  // tbe key must be a number, string, symbol
}

const calculateTransaction2: Transaction2 = {
  GasBill: 30,
  WifiBill: 40,
  ElectricityBill: 50,
};

// work perfectly
calculateTransaction2[wifibill];
for (let i in calculateTransaction2) {
  // console.log(calculateTransaction2[i]);
}

// console.log(calculateTransaction2["something"]);

interface Student1 {
  [key: string]: number | string | number[] | undefined;
  name: string;
  age: number;
  marks?: number[]; // ? symbols representing optional value
}

let student1: Student1 = {
  name: "kamran",
  age: 34,
  marks: [45, 56],
};

// iterate the objects
// for (let stu in student1) {
//   console.log(stu + ":" + student1[stu]); // it possible but when i remove the index signature it will throw an error
// }

// here we remove the index signature
interface Student2 {
  name: string;
  age: number;
  marks?: number[]; // ? symbols representing optional value
}

let student2: Student2 = {
  name: "kamran",
  age: 34,
  marks: [45],
};

// for (let stu in student2) {
//   console.log(stu + ":" + student2[stu]); // it will show error but we can fixed it using keyof
// }

// used Keyof and iterate over an objects

for (let stu in student2) {
  console.log(stu as keyof Student2); // name age marks
  console.log(stu + ":" + student2[stu as keyof Student2]); // issue is fixed and the keyof will make the union of all the Objects keys
}
//Generics

interface StuBox<Type> {
  readonly name: Type; // it will allow that read the data only not modify it
}

let student0: StuBox<string> = {
  name: "kamran",
  // name: 44 // not allowed
};

// student0.name = "sudais"

// console.log(student0.name);
