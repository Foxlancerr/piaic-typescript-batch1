"use strict";
const PartailObject1 = {
    name: "readonly",
    age: 34,
};
PartailObject1.age = 34;
const ReadonlyObject1 = {
    name: "readonly",
    age: 34,
};
const carObject1 = {
    honda: { model: "h500", name: "honda" },
    yamaha: { model: "y500", name: "yamaha" },
};
const Student1 = {
    description: "Student 1",
    name: "Student 1",
};
Student1["hello"] = 45;
console.log(Student1);
