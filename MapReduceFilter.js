const points = [1, 21, 30, 40];

// var result = points.sort((a,b)=>{
//     return a-b;
// });
// var result = points.reverse();
// var re_result = points.split(",");
// console.log(result);
// console.log(re_result);

// const op = points.reduce((acc, curr) => {
//     if(curr < acc) {
//         acc = curr;
//     }
//     return acc;
// });
// console.log(op);

const op = points.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
console.log(op);

// const op = points.filter((x) => x % 2 ==0);
// console.log(op);
