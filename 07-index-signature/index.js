"use strict";
/**
 * @param {Index Signatue}
 *
 * when we access the data in objects dynamically, we need index Signature,
 * if we see this actually then we first config the tsc (tsc --init)
 */
const calculateTransaction1 = {
    GasBill: 30,
    WifiBill: 40,
    ElectricityBill: 50,
};
const wifibill = "WifiBill";
const calculateTransaction2 = {
    GasBill: 30,
    WifiBill: 40,
    ElectricityBill: 50,
};
// work perfectly
calculateTransaction2[wifibill];
for (let i in calculateTransaction2) {
    // console.log(calculateTransaction2[i]);
}
let student1 = {
    name: "kamran",
    age: 34,
    marks: [45, 56],
};
let student2 = {
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
function logStudent(student, key) {
    console.log(`${key} : ${student[key]}`);
}
const streaming1 = {
    stream1: "data1",
    stream2: "data2",
    stream3: "data3",
    // stream4: "data4" //not allowed we can fixed it
};
console.log(streaming1.stream1);
// note: we can stricly mention is keyof else it will show error. this is its fault.
for (let streamData in streaming1) {
    console.log(streamData + ":" + streaming1[streamData]);
}
