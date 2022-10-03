"use strict";
/*eslint-disable */
const crypto = require('crypto');
const startTime = Date.now();
crypto.pbkdf2('test', 'secret', 100000, 64, 'sha512', (err, dirivekey) => {
    console.log(`1. time: ${Date.now() - startTime}`);
})
crypto.pbkdf2('test', 'secret', 100000, 64, 'sha512', (err, dirivekey) => {
    console.log(`2. time: ${Date.now() - startTime}`);
})
crypto.pbkdf2('test', 'secret', 100000, 64, 'sha512', (err, dirivekey) => {
    console.log(`3. time: ${Date.now() - startTime}`);
})
// const fs = require('fs');
// (() => new Promise((resolve) =>))

// console.log('start')
// setTimeout(() => console.log('settimeout'), 10);
// setImmediate(() => console.log('setimmediate'));
// process.nextTick(() => console.log('nexttick'));
// queueMicrotask(() => console.log('microtask'));
// console.log('end');

// const f2 = () => {
//     fs.readFile('hello.txt', 'utf-8', (err, data) => {
//         setTimeout(() => console.log('settimeout'), 10);
//         setImmediate(() => console.log('setimmediate'));
//         process.nextTick(() => console.log('nexttick'));
//         queueMicrotask(() => console.log('microtask'));
//         console.log(data);
//     })
// }
// const main = async () => {
//     f2();
// }

// main();