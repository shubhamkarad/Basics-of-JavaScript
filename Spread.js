const { number, array } = require("prop-types");

//spread operator
const numbers =[1,2,3];
const newNumbers=[...numbers, 4,5,6];
console.log(newNumbers);
//objects
const person={
    name:'max'
};
const newPerson = {
    ...person,
    age:21
}
console.log(newPerson);
// Rest operator
const filter = (...args)=>{
    return args.filter(el=> el === 1);
}
console.log(filter(1,2,3));
// Destructuring
const digits = [1,2,3];
[num1, num2]=digits;
console.log(num1, num2);
//object destructring
const human = {
    name:'Shubham',
    age:20
}

const {name, age} = human;
console.log(name, age);
// Map Function to run this function comment out all above code

const array1 = [1,2,3,4,5];
const doubleArray = array1.map((num)=>{
    return num *2;
})
console.log(array1);
console.log(doubleArray);