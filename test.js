// function evenOrOdd(num) {
//   if (Number.isInteger(num)) {
//     if ((num % 2) === 0) {
//       console.log("even");
//     } else {
//       console.log("odd");
//     }
//   } else {
//     console.log("Oops. That is not an integer!");
//   }
// }

// evenOrOdd(3)
// evenOrOdd(4)
// evenOrOdd("4")





// function numberRange(num) {
//   if (num < 0) {
//     console.log(`${num} is less than 0`);
//   } else if ((num >= 0) && (num <= 50)) {
//     console.log(`${num} is between 0 and 50`);
//   } else if ((num >= 51) && (num <= 100)) {
//     console.log(`${num} is between 51 and 100`);
//   } else {
//     console.log(`${num} is greater than 100`);
//   }
// }

// numberRange(25);
// numberRange(75);
// numberRange(125);
// numberRange(-25);






// let array = [1, 6, 2, 7, 4, 0, 5, 8, 7, 3, 9]
// let indexOfFive;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 5) {
//     indexOfFive = i
//     break
//   }
// }

// console.log(indexOfFive)








// Use Do/While loop to refactor the code
 
// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result = null;

// do {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// } while (result <= 2);

 
// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');





// Nth Factorial

function factorial(n) {
  let result = 1;
  for (let num = n; num > 0; num--) {
    result *= num;
  }
  return result;
}

// Nth Factorial - recursive

function fac(n) {
  if (n === 1) {
    return 1;
  }
  return n * fac(n - 1);
}


// log only the even values to the console:

// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// myArray.forEach(function(arr) {
//   arr.forEach(function(num) {
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//   });
// });







// return a new array where each element is "even" or "odd", representing whether the corresponding
// element in the original array is even or odd

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let mapTest = myArray.map(num => {
//   if (num % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// });

// console.log(mapTest);







// Write a findIntegers function that takes an array argument and returns an array 
// that contains only the integers from the input array. Use the filter method in your function.

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

// function findIntegers(array) {
//   let result = array.filter(num => Number.isInteger(num));
//   return result;
// }

// let ints = findIntegers(things);
// console.log(ints);





// Use map and filter to first determine the lengths of all the elements in an array of
// string values, then discard the even values (keep the odd values).

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(arr) {
//   let lengths = arr.map(string => string.length);
//   let result = lengths.filter(length => length % 2 !== 0 );
//   return result
// }

// console.log(oddLengths(arr));





// Use reduce to compute the sum of the squares of all of the numbers in an array:
let array = [3, 5, 7];

// function sumOfSquares(arr) {
//   let result = arr.reduce((acc, num) => acc + num, 0);
//   return result
// }

// or...

// function sumOfSquares(arr) {
//   let result = arr.reduce(function(acc, num) {
//     let updatedAcc = (acc + num);
//     return updatedAcc
//   }, 0);
//   return result;
// }


// console.log(sumOfSquares(array));






// Use reduce to first determine the lengths of all the elements in an array of string values,
// then discard the even values (keep the odd values).

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(arr) {
//   let result = arr.reduce((acc, string) => {
//     let length = string.length
//     if (length % 2 !== 0) {
//       let updatedAcc = acc.concat(length);
//       return updatedAcc;
//     }
//     return acc;
//   }, []);
//   return result
// }

// console.log(oddLengths(arr));





// create a function that takes two arguments: the object to copy and an array
// of the keys that you want to copy. Do not mutate the original object.
// If you do omit the argument, the function should copy all of the existing keys from the object.



// function copyObj(obj, keysArray = Object.keys(obj)) {
//   let result = {}
//   keysArray.forEach(key => result[key] = obj[key])
//   return result
// }

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };






// Display the largest numeric value in a list:

// function max(numArray) {
//   let max = null;
//   numArray.forEach(function(num) {
//     if (max === null) {
//       max = num;
//     } else if (max < num) {
//       max = num;
//     }
//   })
//   return max;
// }

// let list = [-1, -6, -3, -2];
// console.log(max(list));





// Write a function that searches an array of strings for every element that
// matches the regular expression given by its argument. The function should
// return all matching elements in an array.

// function allMatches(stringArray, regex) {
//   let result = stringArray.filter(string => regex.test(string));
//   return result;
// }

// OR...

// function allMatches(stringArray, regex) {
//   let result = stringArray.filter(function(string) {
//     return regex.test(string)
//   });
//   return result;
// }

// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// console.log(allMatches(words, /lab/));


let lastName = "Williams";
let familyMessage = (lastName === "Williams" ? "You're part of the fambam." : 
                                               "You're not part of the fambam");
console.log(familyMessage);