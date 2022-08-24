const numbers = [3,4];
//end
//beginning 
//middle
numbers.push(5,2);
console.log(numbers);
numbers.unshift(5,10);
console.log(numbers);
numbers.pop();
numbers.splice(1,0,'a','b');
console.log(numbers);
console.log(numbers.indexOf(10));
console.log(numbers.lastIndexOf(5));
console.log(numbers.includes(10));
console.log(numbers.shift());
console.log(numbers);
