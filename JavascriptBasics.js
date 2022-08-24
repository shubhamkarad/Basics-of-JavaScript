console.log("Hey there");
const points = ["shubham", "Karad", "Yash"];

// var result = points.sort((a,b)=>{
//     return a-b;
// });
// var result = points.reverse();
// var re_result = points.split(",");
var arr1 = [];
var arr2 = [];
for (var i = points.length - 1; i >= 0; i--) {
  arr1.push(points[i]);
  // console.log(points[i]);
  var sk = points[i].toString();
  for (j = sk.length; j >= 0; j--) {
    arr2.push(sk[j]);
  }
  console.log(arr2);
  var stb = arr1.toString();
  console.log(stb);
}
var newStr = "";
// stb.forEach(function(i) {
//     var str = i;
//     for(i= i.length -1; i>=0; i--) {
//         newStr += str[i];
//     }
//     arr1.push(newStr);
//     console.log(newStr,',');
// });
console.log(result);
console.log(arr1);
