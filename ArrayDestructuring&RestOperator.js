//-----------Array Destructuring-------------
// With the syntax of destructuring, you can extract smaller fragments from objects and arrays.
// It can be used for assignments and declaration of a variable.

// Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects.
// When destructuring an array, we use their positions (or index) in an assignment.
const cars = ["BMW", "Merce", "Volks"];

var [a, b] = cars;
console.log(a);
console.log(b);

// If you want to choose random elements from the given array then in array destructuring you can perform it
const parts = ["abc", "efg", "lmn", "xyz", "pqr"];
// destructuring assignment
var [first, sec, , fourth] = parts; //Leave space for unpick elements
console.log(first);
console.log(sec);
console.log(fourth);

// By using the rest operator (…) in array destructuring,
// you can put all the remaining elements of an array in a new array.

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

var [a1, b1, ...c1] = colors;

console.log(a1);
console.log(b1);
console.log(c1);

// ----------------------Rest operator--------------------------

function xyz(...args) {
  return args.reduce((prev, curr) => {
    return prev + curr;
  });
}
console.log(xyz(1, 2, 3));
console.log(xyz(1, 2, 3, 4));

function manyArgs(a, b, ...args) {
  console.log(a);
  console.log(b);
  console.log(args);
}
manyArgs("Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red");
