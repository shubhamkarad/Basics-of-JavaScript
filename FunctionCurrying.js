// Using Bind Method

// const multiply = (x, y) => {
//   console.log(x * y);
// };
// const multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(6);
// const multiplyByThree = multiply.bind(this, 3);
// we can use other ways to pass values as params
// const multiplyByThree = multiply.bind(this, 3, 2);
// multiplyByThree(6);

// Using closure

const multiply = (x) => {
  return (y) => {
    console.log(x * y);
  };
};
const multiplyByTwo = multiply(2);
multiplyByTwo(5);

const multiplyByThree = multiply(3);
multiplyByThree(10);
