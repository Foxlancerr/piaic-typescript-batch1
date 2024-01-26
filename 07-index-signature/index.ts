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
  // console.log(stu as keyof Student2); // name age marks
  // console.log(stu + ":" + student2[stu as keyof Student2]); // issue is fixed and the keyof will make the union of all the Objects keys
}

Object.keys(student2).map((key) => {
  // console.log(student2[key as keyof typeof student2]);
});

// function and keyof
function logStudent(student: Student2, key: keyof Student2): void {
  console.log(`${key} : ${student[key]}`);
}

// logStudent(student2, "marks");

// suppose we want that our index signature is literal type and having fixed values instead we used interface, should use type

// interface Stream1{
//   [key: "stream1" | "stream2"]: string // it will not allow that
// }

// it will allow that
type literal = "stream1" | "stream2" | "stream3";
type Stream1 = Record<literal, string>; // Record is reserved words and takes two arguments (key, value)

const streaming1: Stream1 = {
  stream1: "data1",
  stream2: "data2",
  stream3: "data3",
  // stream4: "data4" //not allowed we can fixed it
};

console.log(streaming1.stream1);

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
