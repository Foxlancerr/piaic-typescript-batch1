// convert the string into title case
// the animals == The Animals
// the frames of city == The Frames Of City
var titleCaseCvt = function (str) {
    // way1
    //   const strArr = str
    //     .split(" ")
    //     .map((ele) => ele[0].toUpperCase() + ele.slice(1))
    //     .join(" ");
    //   return strArr;
    // way2
    var result = [];
    for (var _i = 0, _a = str.split(" "); _i < _a.length; _i++) {
        var char = _a[_i];
        result.push(char[0].toUpperCase() + char.slice(1));
    }
    return result.join(" ");
};
console.log(titleCaseCvt("hello this is ahmad"));
