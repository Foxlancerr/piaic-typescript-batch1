// interfaces
interface ICustomer {
  name: string;
  age: number;
  id: number;
}

function getCustomer(customer: ICustomer) {
  return customer;
}

const customer1 = getCustomer({
  name: "kamran",
  age: 20,
  id: 1,
});

console.log(customer1.name);
console.log(customer1.age);

// extends in interface
// the extend keyword inherits all properties types from the ICustomer interface and used here
interface IGoldCustomer extends ICustomer {
  discount: boolean;
}

let customer2: IGoldCustomer = {
  name: "gold",
  age: 15,
  discount: true,
  id: 2,
};

//interface in class
class Banks1 {
  // we can not directly assign it must be initialized
  //   bankName: string; // here got errror but used this symbols to avoid error ====>        !     bankName!: string
  branchCode!: string;
  bankName!: string;
}

// or we can assign values in constructer
class Bank2 {
  constructor() {
    this.bankName = "";
    this.branchCode = 0;
  }
  bankName: string;
  branchCode: number;
}

// now we can create its interface also like the below

let HBl: Bank2 = {
  // but when we used the class as interface, and when it compile and convert into js it will create class also in js but instead if we used pure interface so it will not added inthe JS file
  bankName: "hbl",
  branchCode: 122,
};

interface IBank3 {
  bankName: string;
  branchCode: number;
}

let allied: IBank3 = {
  bankName: "allied",
  branchCode: 343,
};

// extends multiple interfaces with single one
interface IName {
  named: string;
}
interface IAge {
  age: number;
}
interface ICity {
  city: string;
}

// here i will combines it
interface IStudent extends IName, IAge, ICity {
  id: number;
}

let stu1: IStudent = {
  id: 1,
  named: "Student1",
  city: "peshawar",
  age: 45,
};

// generics and interface
// class based

// what problems it solve
// if here we look number is used in many places so we can dynamically pass its types
class GPA {
  marks!: number[];
  total!: number;
  getmarks() {
    for (let i = 0; i < this.marks.length; i++) {
      this.total += this.marks[i];
    }
    return this.total;
  }

  setmarks(...mark: number[]) {
    this.marks.push(...mark);
  }
}

const stu1Gpa = new GPA();
stu1Gpa.setmarks(34, 55);
console.log(stu1Gpa.getmarks());

// keyof
const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: "orange",
};

// way 1
function getProduct(product: string) {
  return productPrices[product as keyof typeof productPrices];
}
getProduct("Banana");
getProduct("Banana");
// way 2
function getProduct2(product: keyof typeof productPrices) {
  return productPrices[product];
}
getProduct2("Banana");
getProduct2("Orange");

// getProduct2("Pearl"); show errors

// Null erros fixed

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

console.log(id?.toUpperCase()); // optional
console.log(id!.toUpperCase()); // not nullable operator
// type guard
if (id) {
  console.log(id.toUpperCase());
}

const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (err) {
  console.log((err as Error).message); // way1
  // way2
  if (err instanceof Error) {
    console.log(err.message);
  }
}
