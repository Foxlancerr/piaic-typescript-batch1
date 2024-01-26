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
  console.log(id, name);
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
  if (typeof args === "object" && args !== null && !Object.keys(args as keyof T))
    return { args, is: false };
  return { args, is: !!args };
};

// in here we can see differnt datatypes and automatically it converts it
console.log(boolCheck("kamran"));
console.log(boolCheck([]));
console.log(boolCheck(""));
console.log(boolCheck({ name: "ahmad" }));
