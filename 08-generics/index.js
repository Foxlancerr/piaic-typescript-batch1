/**
 * @param { Generics}
 *
 * Generics are a fundamental feature of statically-typed languages, allowing developers to pass types as parameters to another type, function, or other structure. When a developer makes their component a generic component, they give that component the ability to accept and enforce typing that is passed in when the component is used, which improves code flexibility, makes components reusable, and removes duplication.
 */
// objects
var student1 = {
    id: "1",
    marks: ["40", "50"],
};
var student2 = {
    id: 10,
    marks: [100, 70],
};
// function
function getStudent(id, name) {
    // console.log(id, name);
}
// getStudent(1, "kamran");
getStudent(1, "kamran"); // type is passed as parameter
function identity(value) {
    return value;
}
var result = identity({ name: "kamran" });
// console.log(result);
var boolCheck = function (args) {
    if (Array.isArray(args) && args.length)
        return { args: args, is: false };
    if (typeof args === "object" && args !== null && !Object.keys(args))
        return { args: args, is: false };
    return { args: args, is: !!args };
};
var processUser = function (user) {
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
function identity1(arg) {
    return arg;
}
// way1
var myIdentity1 = identity1;
console.log(myIdentity1("hii"));
console.log(typeof myIdentity1);
// way2
var myIdentity2 = identity1;
console.log(myIdentity2("hii"));
console.log(typeof myIdentity2);
var stuObj1 = {
    name: "sudais",
    age: 45,
};
// generics for classes
var Animals = /** @class */ (function () {
    function Animals() {
    }
    return Animals;
}());
var dog1 = new Animals();
// dog1.name = 34 // not allowed
dog1.name = "Dog1";
dog1.bark = function (voice) {
    console.log(voice);
};
dog1.bark("woo woo");
