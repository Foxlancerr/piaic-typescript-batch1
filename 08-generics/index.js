"use strict";
/**
 * @param { Generics}
 *
 * Generics are a fundamental feature of statically-typed languages, allowing developers to pass types as parameters to another type, function, or other structure. When a developer makes their component a generic component, they give that component the ability to accept and enforce typing that is passed in when the component is used, which improves code flexibility, makes components reusable, and removes duplication.
 */
// objects
let student1 = {
    id: "1",
    marks: ["40", "50"],
};
let student2 = {
    id: 10,
    marks: [100, 70],
};
// function
function getStudent(id, name) {
    console.log(id, name);
}
getStudent(1, "kamran");
getStudent(1, "kamran"); // type is passed as parameter
function identity(value) {
    return value;
}
const result = identity({ name: "kamran" });
console.log(result);
const boolCheck = (args) => {
    if (Array.isArray(args) && args.length)
        return { args, is: false };
    if (typeof args === "object" && args !== null && !Object.keys(args))
        return { args, is: false };
    return { args, is: !!args };
};
console.log(boolCheck("kamran"));
console.log(boolCheck([]));
console.log(boolCheck(""));
console.log(boolCheck({ name: "ahmad" }));
