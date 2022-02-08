// const rlSync = require("readline-sync");

// const { diffChars } = require("prettier");

// Write a function that takes a positive integer as an argument, and
// logs all the odd numbers from 1 to the passed in number (inclusive).
// All numbers should be logged on separate lines.

// function logOddNumbers(int) {
//   for (let i = 1; i <= int; i++) {
//     if (i % 2 === 0) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// logOddNumbers(19);


// Write a function that logs the integers from a range (inclusive) that are
// multiples of either 3 or 5. If the number is divisible by both 3 and 5, append
// an "!" to the number.

// function multiplesOfThreeAndFive(firstNum, secondNum) {
//   for (let i = firstNum; i <= secondNum; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//       console.log(i + "!");
//     } else if ((i % 3 === 0) || (i % 5 === 0)) {
//       console.log(String(i));
//     }
//   }
// }

// multiplesOfThreeAndFive(12, 24)


// Write a function logMultiples that takes one argument number.
// It should log all multiples of the argument between 0 and 100 (inclusive)
// that are also odd numbers. Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

// function maxMultiple(num) {
//   let result = Math.floor(100 / num) * num;
//   return result;
// }

// function logMultiples(num) {
//   for (let i = maxMultiple(num); i >= 0; i -= num) {
//     if (i % 2 === 1) {
//       console.log(i);
//     }
//   }
// }

// logMultiples(21);


// Write a function that iterates over the integers from 1 to 100, inclusive.
// For multiples of three, log "Fizz" to the console. For multiples of five,
// log "Buzz". For numbers which are multiples of both three and five,
// log "FizzBuzz". For all other numbers, log the number.

// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     let output = i;
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         output = "Fizzbuzz";
//     } else if (i % 3 === 0) {
//         output = "Fizz";
//     } else if (i % 5 === 0) {
//         output = "Buzz";
//     } 

//     console.log(output);
//   }
// }

// fizzBuzz()


// Write a function that takes a number argument, and returns true if
// the number is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.

// function isPrime(num) {
//   if (num <= 1 || ((num > 2) && (num % 2 === 0))) {
//     return false;
//   }

//   for (let i = 3; i <= Math.ceil(num / 2); i += 2) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(1));   // false
// console.log(isPrime(2));   // true
// console.log(isPrime(3));   // true
// console.log(isPrime(43));  // true
// console.log(isPrime(55));  // false
// console.log(isPrime(0));   // false


// Write a function named isXor that takes two arguments, and returns
// true if exactly one argument is truthy, false otherwise. Your function
// should work with the boolean values of true and false, but also any
// JavaScript values based on their "truthiness".

// function isXor(first, second) {
//   let result = ((!!first || !!second) && !(!!first && !!second));
//   return result;
// }

// console.log(isXor(false, true));     // true
// console.log(isXor(true, false));     // true
// console.log(isXor(false, false));    // false
// console.log(isXor(true, true));      // false


// console.log(isXor(false, 3));        // true
// console.log(isXor('a', undefined));  // true
// console.log(isXor(null, ''));        // false
// console.log(isXor('2', 23));         // false


// Write a password guessing program that tracks how many times the user
// enters the wrong password. If the user enters the password wrong three
// times, log 'You have been denied access.' and terminate the program.
// If the password is correct, log 'You have successfully logged in.' and
// end the program.

// function login() {
//   let password = "password"
//   let attempts = 0;

//   while (attempts < 3) {
//     let guess = prompt("What is the password?");

//     if (guess === password) {
//       alert("You have successfully logged in.");
//     } else {
//       attempts++
//     }
//   }
//   alert("You have been denied access.");
// }

// login();


// Write a program to determine a student’s grade based on the average
// of three scores you get from the user. Use these rules
// to compute the grade:

// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 
//   then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 then
//   the grade is 'C'
// If the average score is less than 50 then the grade is 'F'
// You may assume that all input values are valid positive integers.

// function average(array) {
//   let sum = 0;
//   array.forEach(element => {
//     sum += element
//   });
//   let result = sum / array.length;
//   return result
// }

// function grade(averageScore) {
//   if (averageScore >= 90) {
//     return "A"
//   } else if (averageScore >= 70) {
//     return "B";
//   } else if (averageScore >= 50) {
//     return "C";
//   } else {
//     return "F";
//   }
// }

// function getGrade() {
//   let grade1 = parseFloat(prompt("Enter score 1: ").trim());
//   let grade2 = parseFloat(prompt("Enter score 2: ").trim());
//   let grade3 = parseFloat(prompt("Enter score 3: ").trim());
//   let avg = average([grade1, grade2, grade3]);
//   alert(`Based on the average of your 3 scores, your letter grade is "${grade(avg)}".`);
// }

// getGrade()


// Create a function that computes the Greatest Common Divisor of two positive integers.


// function divisors(num) {
//   let result = [];
//   for (let i = num; i >= 1; i--) {
//     if (num % i === 0) {
//       result.push(i)
//     }
//   }
//   return result;
// }

// function gcd(int1, int2) {
//   let result;
//   let divisors1 = divisors(int1);
//   let divisors2 = divisors(int2);
//   divisors1.forEach(e => {
//     if (result) {
//       return;
//     }
//     if (divisors2.includes(e)) {
//       result = e;
//     }
//   });
//   return result;
// }

// console.log(gcd(4, 12));
// console.log(gcd(10, 15));
// console.log(gcd(2, 9));


// Write a function named checkGoldbach that uses Goldbach's Conjecture
// to log every pair of primes that sum to the number supplied as an argument.
// The conjecture states that "you can express every even integer greater than
// 2 as the sum of two primes". The function takes as its only parameter, an
// integer expectedSum, and logs all combinations of two prime numbers whose sum
// is expectedSum. Log the prime pairs with the smaller number first. If
// expectedSum is odd or less than 4, your function should log null.

// function isPrime(num) {
//   if (num <= 1 || ((num > 2) && (num % 2 === 0))) {
//     return false;
//   }

//   for (let i = 3; i <= Math.ceil(num / 2); i += 2) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function checkGoldbach(int) {
//   if ((int % 2 !== 0) || (int <= 3)) {
//     console.log(null);
//   } else {
//     let result = [];
//     for (let firstNum = 2; firstNum < int; firstNum++) {
//       if (isPrime(firstNum)) {
//         let secondNum = int - firstNum;
//         if (firstNum > secondNum) break;

//         if (isPrime(secondNum)) {
//           result.push([firstNum, secondNum])
//         }

//       }

//     }

//     result.forEach(e => console.log(`${e[0]} ${e[1]}`));
//   }

// }

// console.log(checkGoldbach(3));
// console.log(checkGoldbach(4));
// console.log(checkGoldbach(12));
// console.log(checkGoldbach(100));


// Write a function that takes a number of rows as the argument nStars and
// logs a square of numbers and asterisks. For example, if nStars is 7,
// log the following pattern:

// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

// function lastRowLength(rowCount) {
//   let lastRow = "";
//   for (let i = 1; i <= rowCount; i++) {
//     lastRow = lastRow + i;
//   }
//   return lastRow.length
// }

// function generatePattern(rowCount) {
//   let maxLength = lastRowLength(rowCount)

//   let asteriskString = "";
//   for (let i = 1; i < maxLength; i++) {
//     asteriskString = asteriskString + "*";
//   }

//   let numberString = "";
//   for (let i = 1; i <= rowCount; i++) {
//     numberString = numberString + i;
//     let output = numberString + asteriskString
//     while (output.length > maxLength) {
//       output = output.slice(0, -1);
//     }
//     console.log(output);
//     asteriskString = asteriskString.slice(0, -1);
//   }
// }

// generatePattern(12);


// Write two functions that each take two strings as arguments. Their expected
// behaviors are as follows:

// The indexOf function searches for the first instance of a substring in firstString
// that matches the string secondString, and returns the index of the character where
// that substring begins.

// The lastIndexOf function searches for the last instance of a substring in
// firstString that matches the string secondString, and returns the index of
// the character where that substring begins.

// Both functions return -1 if firstString does not contain the substring specified
// by secondString.


// function indexOf(firstString, secondString) {
//   let window = secondString.length
//   let result = -1;
//   for (let i = 0; i < firstString.length; i++) {
//     if (firstString.slice(i, window + i) === secondString) {
//       result = i;
//       break;
//     }
//   }
//   return result
// }

// OR... (not using any Array.prototype. methods)

// function lastIndexOf(firstString, secondString) {
//   let window = secondString.length
//   let result = [-1];
//   for (let i = 0; i < firstString.length; i++) {
//     if (firstString.slice(i, window + i) === secondString) {
//       result.push(i);
//     }
//   }
//   return result.pop()
// }

// function indexOf(firstString, secondString) {
//   let result = -1;
//   for (let i = 0; i < firstString.length; i++) {
//     let match = true;
//     for (let l = 0; l < secondString.length; l++) {
//       if (firstString[i + l] !== secondString[l]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) {
//       result = i;
//       break
//     }
//   }
//   return result;
// }

// function lastIndexOf(firstString, secondString) {
//   let result = [-1];
//   for (let i = 0; i < firstString.length; i++) {
//     let match = true;
//     for (let l = 0; l < secondString.length; l++) {
//       if (firstString[i + l] !== secondString[l]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) {
//       result.push(i);
//     }
//   }
//   debugger;
//   return result.pop();
// }

// console.log(indexOf('Some strings', 's'));                      // 5
// console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));  
// console.log(lastIndexOf('Some strings', 's'));                  // 11
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1


// Write a function that takes a string as an argument, and returns the
// string stripped of spaces from both ends. Do not remove or alter internal spaces.

// function trimLead(string) {
//   while (string[0] === " ") {
//     let newString = ""
//     for (let i = 1; i < string.length; i++) {
//       newString = newString + string[i];
//     }
//     string = newString;
//   }
//   return string;
// }

// function trimTrail(string) {
//   while (string[string.length - 1] === " ") {
//     let newString = ""
//     for (let i = 0; i < string.length - 1; i++) {
//       newString = newString + string[i];
//     }
//     string = newString;
//   }
//   return string;
// }

// function trim(string) {
//   string = trimLead(string);
//   string = trimTrail(string);
//   return string;
// }

// console.log(trim('  abc  '));  // "abc"
// console.log(trim('abc   '));   // "abc"
// console.log(trim(' ab c'));    // "ab c"
// console.log(trim(' a b  c'));  // "a b  c"
// console.log(trim('      '));   // ""
// console.log(trim(''));   // ""


// Write a function that takes two arguments:

// a string to be split
// a delimiter character

// log each new string after splitting

// function splitString(string, delimiter) {
//   if (delimiter == undefined) {
//     console.log("ERROR: No delimiter argument provided");
//     return
//   }

//   let result = [""];
//   let delimiterCount = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (delimiter === "") {
//       result[delimiterCount] = string[i]
//       delimiterCount += 1;
//     } else if (string[i] === delimiter) {
//       delimiterCount += 1;
//     } else {
//       result[delimiterCount] ||= "";
//       result[delimiterCount] = result[delimiterCount] + string[i];
//     }
//   }

//   result.forEach(e => console.log(e));
// }

// splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

// splitString('hello');
// // logs:
// // ERROR: No delimiter

// splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

// splitString('hello', ';');
// // logs:
// // hello

// splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello


// Implement a function that takes a string and a number times as arguments.
// The function should return the string repeated times number of times.
// If times is not a number, return undefined. If it is a negative number,
// return undefined also. If times is 0, return an empty string.
// You may ignore the possibility that times is a number that isn't an integer.

// function repeat(string, times) {
//   if (!(Number.isInteger(times)) || (times < 0)) {
//     return undefined;
//   }

//   let result = ""
//   for (let i = 1; i <= times; i++) {
//     result += string;
//   }
  
//   return result;
// }

// console.log(repeat('abc', 1));       // "abc"
// console.log(repeat('abc', 2));       // "abcabc"
// console.log(repeat('abc', -1));      // undefined
// console.log(repeat('abc', 0));       // ""
// console.log(repeat('abc', 'a'));     // undefined
// console.log(repeat('abc', false));   // undefined
// console.log(repeat('abc', null));    // undefined
// console.log(repeat('abc', '  '));    // undefined


// Implement a function that determines whether a string begins with another string.
// If it does, the function should return true, or false otherwise.

// function startsWith(string, searchString) {
//   let beginning = "";
//   if (searchString === "") {
//     return true;
//   }

//   for (let i = 0; i < searchString.length; i++) {
//     beginning += string[i];
//   }

//   return (searchString === beginning);
// }

// let str = 'We put comprehension and mastery above all else';
// console.log(startsWith(str, 'We'));              // true
// console.log(startsWith(str, 'We put'));          // true
// console.log(startsWith(str, ''));                // true
// console.log(startsWith(str, 'put'));             // false

// let longerString = 'We put comprehension and mastery above all else!';
// console.log(startsWith(str, longerString));


// Write a function that returns a string converted to lowercase.
// You can use the String.fromCharCode and the String.charCodeAt methods.
// You can use square brackets to access a character at an index.
// You may not use any other properties or methods from JavaScript's built-in String class

// function toLowerCase(string) {
//   const OFFSET_TO_LOWERCASE = 32;
//   let result = "";

//   for (let i = 0; i < string.length; i++) {
//     let letterCode = string.charCodeAt(i);

//     if ((letterCode >= 65) && (letterCode <= 90)) {
//       letterCode += OFFSET_TO_LOWERCASE;
//     }

//     result += String.fromCharCode(letterCode)
//   }

//   return result;
// }

// console.log(toLowerCase('ALPHABET'));    // "alphabet"
// console.log(toLowerCase('123'));         // "123"
// console.log(toLowerCase('abcDEF'));      // "abcdef"


// Write a function that returns a substring of a string based on a
// starting index and length.

// function substr(string, startIndex, length) {
//   if (length <= 0) {
//     return "";
//   }

//   if (startIndex < 0) {
//     startIndex = string.length + startIndex;
//   }

//   let result = "";

//   for (let i = startIndex; result.length < length; i++) {
//     result += string[i];

//     if (i >= string.length - 1) {
//       break;
//     }

//   }

//   return result;
// }

// let string = 'hello world';
// console.log(substr(string, 2, 4));      // "llo "
// console.log(substr(string, -3, 2));     // "rl"
// console.log(substr(string, 8, 20));     // "rld"
// console.log(substr(string, 0, -20));    // ""
// console.log(substr(string, 0, 0));      // ""


// function substring(string, startIndex, endIndex) {
//   startIndex = Number(startIndex);

//   if (startIndex > string.length - 1) {
//     startIndex = string.length - 1;
//   }

//   if (endIndex > string.length) {
//     endIndex = string.length;
//   }

//   if (endIndex === undefined) {
//     endIndex = string.length;
//   }

//   if (startIndex > endIndex) {
//     [startIndex, endIndex] = [endIndex, startIndex];
//   }

//   if ((startIndex < 0) || (Number.isNaN(startIndex))) {
//     startIndex = 0;
//   }

//   if ((endIndex < 0) || (Number.isNaN(endIndex))) {
//     endIndex = 0;
//   }

//   let result = "";
//   for (let i = startIndex; i < endIndex; i++) {
//     result += string[i];
//   }

//   return result;
// }

// let string = 'hello world';

// console.log(substring(string, 2, 4));    // "ll"
// console.log(substring(string, 4, 2));    // "ll"
// console.log(substring(string, 0, -1));   // ""
// console.log(substring(string, 2));       // "llo world"
// console.log(substring(string, 'a'));     // "hello world"
// console.log(substring(string, 8, 20));   // "rld"


// Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates
// a String into a new String:

// For each character in the original String:

// If the character is a letter in the modern English alphabet, change it to the
// character 13 positions later in the alphabet. Thus, a becomes n. If you reach
// the end of the alphabet, return to the beginning. Thus, o becomes b.
// Letter transformations preserve case. A becomes N while a becomes n.
// Don't modify characters that are not letters.
// Write a Function, rot13, that takes a String and returns that String
// transformed by the rot13 cipher.

// function rotate(charCode) {
//   const ROTATION = 13;

//   if ((charCode >= 97 && charCode <= 109) || 
//       (charCode >= 65 && charCode <= 78)) {
//         charCode += ROTATION;
//   } else if ((charCode >= 110 && charCode <= 122) ||
//              (charCode >= 79 && charCode <= 90)) {
//                charCode -= ROTATION;
//              }

//   return charCode;
// }

// function rot13(string) {
//   let result = "";

//   for (let i = 0; i < string.length; i++) {
//     let currentCharCode = string.charCodeAt(i);
//     let rotatedCharCode = rotate(currentCharCode);
//     result += String.fromCharCode(rotatedCharCode);
//   }
  
//   return result;
// }

// function rot13(string) {
//   const ROTATION = 13;

//   let result = "";

//   for (let i = 0; i < string.length; i++) {
//     let currentCharCode = string.charCodeAt(i);

//     if ((currentCharCode >= 97) && (currentCharCode <= 109)) {
//       currentCharCode += ROTATION;
//     } else if ((currentCharCode >= 110) && (currentCharCode <= 122)) {
//       currentCharCode -= ROTATION;
//     } else if ((currentCharCode >= 65) && (currentCharCode <= 78)) {
//       currentCharCode += ROTATION;
//     } else if ((currentCharCode >= 79) && (currentCharCode <= 90)) {
//       currentCharCode -= ROTATION;
//     }
    
//     result += String.fromCharCode(currentCharCode);
//   }
  
//   return result;
// }

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));