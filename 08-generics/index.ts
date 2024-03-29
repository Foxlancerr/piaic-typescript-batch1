/**
 * @param { Generics}
 *
 * Generics are a fundamental feature of statically-typed languages, allowing developers to pass types as parameters to another type, function, or other structure. When a developer makes their component a generic component, they give that component the ability to accept and enforce typing that is passed in when the component is used, which improves code flexibility, makes components reusable, and removes duplication.
 */

interface Box<T> {
  id: T;
  marks: T[];
}

// objects
let student1: Box<string> = {
  id: "1",
  marks: ["40", "50"],
};

let student2: Box<number> = {
  id: 10,
  marks: [100, 70],
};

// function
function getStudent<T, K>(id: T, name: K) {
  // console.log(id, name);
}

// getStudent(1, "kamran");
getStudent<number, string>(1, "kamran"); // type is passed as parameter

type ProgrammingLanguage = {
  name: string;
};

function identity<T>(value: T): T {
  return value;
}

const result = identity<ProgrammingLanguage>({ name: "kamran" });
// console.log(result);

const boolCheck = <T>(args: T): { args: T; is: boolean } => {
  if (Array.isArray(args) && args.length) return { args, is: false };
  if (typeof args === "object" && args !== null && !Object.keys(args))
    return { args, is: false };
  return { args, is: !!args };
};

// in here we can see differnt datatypes and automatically it converts it
// console.log(boolCheck("kamran"));
// console.log(boolCheck([]));
// console.log(boolCheck(""));
// console.log(boolCheck({ name: "ahmad" }));

interface HasId {
  id: number;
}

const processUser = <U extends HasId>(user: U): U => {
  return user;
};

processUser({ id: 12, name: "ahmad" });
// processUser({  name: "ahmad" }); //not allowed

// function loggingIdentity<Type>(arg: Type): Type {
// console.log(arg.length);
// Property 'length' does not exist on type 'Type'.
// return arg;
// }

// let logIdentity = loggingIdentity([34, 45, 34, 67]);
// console.log(typeof logIdentity);

// how i solve this issue, by the below codings we can resolve it
interface GLength {
  length: number;
}
const stuFunction: <T extends GLength>(args: T) => T = (args) => {
  args.length;
  return args;
};

function identity1<Type>(arg: Type): Type {
  return arg;
}

// way1
let myIdentity1: <Type>(arg: Type) => Type = identity1;
// console.log(myIdentity1("hii"));
// console.log(typeof myIdentity1);

// way2
let myIdentity2: { <Type>(arg: Type): Type } = identity1;
// console.log(myIdentity2("hii"));
// console.log(typeof myIdentity2);

// how i will assign generics for interface interfaces

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;

// how i pass type to interface
// interface Student<S, N> {
//   name: S;
//   age: N;
// }

// let stuObj1: Student<string, number> = {
//   name: "sudais",
//   age: 45,
// };

// generics for classes

// class Animals<S> {
//   name!: S;
//   bark!: (voice: string) => void;
// }

// let dog1 = new Animals<string>();

// dog1.name = 34 // not allowed
// dog1.name = "Dog1";
// dog1.bark = function (voice) {
//   console.log(voice);
// };
// dog1.bark("woo woo");

// Conditional types generics
type Animal1Type<T> = T extends string ? true : false;

type Example1Type = Animal1Type<"hello world">;
type Example2Type = Animal1Type<67>;

// templates literals types
type URL1 = `http://${string}.com`;
const url: URL1 = "http://hello.com";
// const url:URL1 =45 // not allowed

//Messanger interface
// in this we can remove the optional and used only those which is required
interface Messenger {
  sendText: () => void;
  sendFile: () => void;
  checkStatus?: () => void; // if i will make this optional check the messangerFeatures2 varaibles it show error
}

type RequiredFields<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]; // here the require is used
};

type RequiredMessengerProperties = RequiredFields<Messenger>;

type FeatureOptions<T> = {
  [K in keyof T as `is${Capitalize<K & string>}Enabled`]: boolean;
};

type FeatureFlags = FeatureOptions<RequiredMessengerProperties>;

// Example usage:
const messengerFeatures1: FeatureFlags = {
  isSendTextEnabled: false,
  isSendFileEnabled: false,
};

const messengerFeatures2: FeatureFlags = {
  isSendTextEnabled: true,
  isSendFileEnabled: false,
  // isCheckStatusEnabled: false,// show eror
};

// array elements generics

let marks1 = [34, 45, 23, 78, 78];

interface AllDataOutput1 {
  <T>(arr: T[]): void;
}
function allDataOutput1<T>(arr: T[]): void {
  arr.forEach((el) => {
    console.log(el);
  });
}
const allDataOutput2: AllDataOutput1 = (arr) => {
  arr.forEach((el) => {
    console.log(el);
  });
};

// allDataOutput1(marks1);
// allDataOutput2(marks1);

// fetch data from json placholder website
// https://jsonplaceholder.typicode.com/users

// interface JsonDataOutput {
//   <T>(url: string): Promise<null | T>;
// }
// const fetchData: <T>(url: T) => Promise<T | null> = (url) => {
//   return new Promise();
//   // return 4
// };

// fetchData("https://jsonplaceholder.typicode.com/users");

interface JsonDataOutput {
  <T>(url: string): Promise<null | T>;
}

const fetchData1: JsonDataOutput = <T>(url: string): Promise<null | T> => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      return response.json() as Promise<T>;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

fetchData1<{ name: string }[]>(
  "https://jsonplaceholder.typicode.com/users"
).then((data) => {
  if (data) {
    console.log(data);
  }
});



