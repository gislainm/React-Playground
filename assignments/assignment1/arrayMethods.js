"use strict";

//spread operator
let array = [1, 2, 3, 4];
const arrayCopy = [...array];

//copy array of numbers in sorted order using map and sort
function copySorted(arr) {
    let copyArr = arr.map((item) => item);
    return copyArr.sort();
}
//find average of array using reduce
function getAverageAge(arr) {
    let average = arr.reduce((sum, element) => sum + element.age, 0) / arr.length;
    return average;
}

//filter array of numbers with a given range
function filterRange(arr, a, b) {
    let newArr = arr.filter(item => item >= a && item <= b);
    return newArr;
}

//remove item at given index in array using splice
function removeItem(arr, index) {
    arr.splice(index, 1);
    return arr;
}

//clone array using slice
function copyArr(array) {
    let newarr = array.slice();
    newarr.push(10);
    console.log(newarr, array);
}

console.log(removeItem([1, 2, 3, 4, 5], 2));
copyArr([6, 7, 8, 9])