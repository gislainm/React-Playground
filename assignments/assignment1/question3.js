"use strict"
/*eslint-disable */

function Person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname
}

const person1 = new Person("Gislain", "Muhikira");

function Greet() {
    this.greet = function () {
        console.log(`hello ${this.firstname} ${this.lastname}`);
    }
}

const greetings = new Greet();
const greetGislain = greetings.greet.call(person1);
