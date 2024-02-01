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
    // console.log(id, name);
}
// getStudent(1, "kamran");
getStudent(1, "kamran"); // type is passed as parameter
function identity(value) {
    return value;
}
const result = identity({ name: "kamran" });
// console.log(result);
const boolCheck = (args) => {
    if (Array.isArray(args) && args.length)
        return { args, is: false };
    if (typeof args === "object" && args !== null && !Object.keys(args))
        return { args, is: false };
    return { args, is: !!args };
};
const processUser = (user) => {
    return user;
};
processUser({ id: 12, name: "ahmad" });
const stuFunction = (args) => {
    args.length;
    return args;
};
function identity1(arg) {
    return arg;
}
// way1
let myIdentity1 = identity1;
// console.log(myIdentity1("hii"));
// console.log(typeof myIdentity1);
// way2
let myIdentity2 = identity1;
const url = "http://hello.com";
// Example usage:
const messengerFeatures1 = {
    isSendTextEnabled: false,
    isSendFileEnabled: false,
};
const messengerFeatures2 = {
    isSendTextEnabled: true,
    isSendFileEnabled: false,
    // isCheckStatusEnabled: false,// show eror
};
// array elements generics
let marks1 = [34, 45, 23, 78, 78];
function allDataOutput1(arr) {
    arr.forEach((el) => {
        console.log(el);
    });
}
const allDataOutput2 = (arr) => {
    arr.forEach((el) => {
        console.log(el);
    });
};
const fetchData1 = (url) => {
    return fetch(url)
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }
        return response.json();
    })
        .catch((error) => {
        console.error(error);
        return null;
    });
};
fetchData1("https://jsonplaceholder.typicode.com/users").then((data) => {
    if (data) {
        console.log(data);
    }
});
