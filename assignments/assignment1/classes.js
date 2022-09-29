"use strict";
/*eslint-disable */

class Person {
    constructor(fname, lname, age) {
        this.firstname = fname;
        this.lastname = lname;
        this.age = age;
    }
    getFullName() {
        return this.firstname + " " + this.lastname
    }
}

class Student extends Person {
    constructor(fname, lname, age, grade) {
        super(fname, lname, age);
        this.grade = grade;
    }
}

const student1 = new Student("Gislain", "Muhikira", 23, "Sophomore");
console.log(student1.getFullName());
console.log(student1.firstname);