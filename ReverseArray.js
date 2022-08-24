var arr = ["Shubh", "Yash", "Karad", "Karande"];
var arr1 = [];
arr.forEach((element) => {
  arr1.unshift(element);
});
console.log(arr1);
var arr2 = [];
// for(var i=0; i <= arr1.length-1; i++) {
//     var max = arr1[i].split('');
//     console.log(max);
//     max.forEach(ele => {
//         arr2.push(ele);
//     });
//     // for(var j= max.length-1; j >=0; j--) {
//     //     arr2.push(arr1[i][j]);
//     // }
//     // arr2.push(arr1[i].split('').reverse().join(''));
// }
arr1.forEach((ele) => {
  arr2.push(ele.split("").reverse().join(""));
});
console.log(arr2);
