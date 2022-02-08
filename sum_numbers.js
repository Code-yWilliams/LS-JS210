let rlSync = require("readline-sync");
let firstNumber = rlSync.question("What is the first number?\n");
let secondNumber = rlSync.question("What is the second number?\n");
let sum = Number(firstNumber) + Number(secondNumber)

console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`)