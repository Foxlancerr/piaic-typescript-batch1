// given an array and divid into sub arrays, which the size is given
// divide([2,3,4,2,3,4],2) == [[2,3],[4,2],[3,4]]
// divide([2,3,4,2,3,5],3) == [[2,3,4],[2,3,5]]

type TMark = number[];
let mark1: TMark = [34, 23, 45, 23, 67, 78, 34, 23];


const divideArrayIntoChunk: (arr: TMark, size: number) => any = (arr, size) => {
  let index: number = 0;
  const result = [];
  while (index < arr.length) {
    result.push(arr.slice(index, size + index));
    index += size;
  }
  return result;
};

console.log(divideArrayIntoChunk(mark1, 3));
console.log(divideArrayIntoChunk(mark1, 1));
