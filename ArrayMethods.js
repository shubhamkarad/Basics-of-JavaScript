const cars = ["BMW", "Ferrari", "Range Rover"];
console.log(cars);
// 1. pop() will delete the last element from an array.
cars.pop();
console.log(cars, "[pop()]");
// 2. push() will add the element to last position an array.
cars.push("TATA");
console.log(cars, "[push()]");
// 3. shift will delete the first element from an array.
cars.shift();
console.log(cars, "[shift()]");
// 4. unshift will add the element at the starts of an array.
cars.unshift("BMW");
console.log(cars, "[unshift()]");
// 5. slice will slices out the piece of code and return into an new array.
var arr1 = cars.slice(0,2);
console.log(arr1, "[slice()]");
// 7. Array concatination.
var bikes = ["Honda", "YAMAHA", "PULSAR"];
var mixed = cars.concat(bikes);
console.log(mixed, "[concat()]");
// 7. splice will add or remove elements from an array in whichever position we want.
// 1st position is - where to add and 2nd is to delete any item.
bikes.splice(1,0, "KTM", "HERO");
console.log(bikes, "[splice()]");