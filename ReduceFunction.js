// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array1 = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1+2+3+4
console.log(array1.reduce(reducer));
// expected output = 10
// 12+1+2+3+4
console.log(array1.reduce(reducer,12));
// expected output = 22