"use strict";
/*eslint-disable */

function Person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
}
Person.prototype.getFullName = function () {
    return this.firstname + " " + this.lastname;
}

const person1 = new Person("Gislain", "Muhikira");

console.log(person1.getFullName());