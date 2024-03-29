function getCustomer(customer) {
    return customer;
}
var customer1 = getCustomer({
    name: "kamran",
    age: 20,
    id: 1,
});
console.log(customer1.name);
console.log(customer1.age);
var customer2 = {
    name: "gold",
    age: 15,
    discount: true,
    id: 2,
};
//interface in class
var Banks1 = /** @class */ (function () {
    function Banks1() {
    }
    return Banks1;
}());
// or we can assign values in constructer
var Bank2 = /** @class */ (function () {
    function Bank2() {
        this.bankName = "";
        this.branchCode = 0;
    }
    return Bank2;
}());
// now we can create its interface also like the below
var HBl = {
    // but when we used the class as interface, and when it compile and convert into js it will create class also in js but instead if we used pure interface so it will not added inthe JS file
    bankName: "hbl",
    branchCode: 122,
};
var allied = {
    bankName: "allied",
    branchCode: 343,
};
var stu1 = {
    id: 1,
    named: "Student1",
    city: "peshawar",
    age: 45,
};
// generics and interface
// class based
// what problems it solve
// if here we look number is used in many places so we can dynamically pass its types
var GPA = /** @class */ (function () {
    function GPA() {
    }
    GPA.prototype.getmarks = function () {
        for (var i = 0; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        return this.total;
    };
    GPA.prototype.setmarks = function () {
        var _a;
        var mark = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mark[_i] = arguments[_i];
        }
        (_a = this.marks).push.apply(_a, mark);
    };
    return GPA;
}());
var stu1Gpa = new GPA();
stu1Gpa.setmarks(34, 55);
console.log(stu1Gpa.getmarks());
