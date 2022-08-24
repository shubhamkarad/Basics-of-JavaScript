// Example of Map Function which is useful when we want to perform some operation on
// any array or array of object.  
const array1 = [
    {
    id:1,
    name:'Shubham',
    lastName:'Karad'
    },
    {
    id:2,
    name:'Nama',
    lastName:'Chadda'
    },
    {
    id:3,
    name:'Ritik',
    lastName:'Ranan'
    },
    {
    id:4,
    name:'Manoj',
    lastName:'Kumar'
    },

]
let array2 = array1.map(user=> {
    return `Hello I'm ${user.name} ${user.lastName}`;
    });
    const array3 = array2.slice(0,3);
console.log(array2);
console.log(array3);