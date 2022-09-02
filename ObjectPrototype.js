function Person(first, last) {
  (this.firstName = first),
    (this.lastName = last),
    console.log(this.firstName + this.lastName);
}
Person.prototype.nationality = "Indian";
const myName = new Person("Shubham", "Karad");
console.log(myName.nationality);
