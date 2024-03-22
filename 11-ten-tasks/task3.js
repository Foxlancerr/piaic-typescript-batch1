// given an array and divid into sub arrays, which the size is given
// divide([2,3,4,2,3,4],2) == [[2,3],[4,2],[3,4]]
// divide([2,3,4,2,3,5],3) == [[2,3,4],[2,3,5]]
var mark1 = [34, 23, 45, 23, 67, 78, 34, 23];
var divideArrayIntoChunk = function (arr, size) {
    var index = 0;
    var result = [];
    while (index < arr.length) {
        result.push(arr.slice(index, size + index));
        index += size;
    }
    return result;
};
console.log(divideArrayIntoChunk(mark1, 3));
console.log(divideArrayIntoChunk(mark1, 1));
