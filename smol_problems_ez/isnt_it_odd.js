// Write a function that takes one integer argument, which may be positive,
// negative, or zero. This method returns true if the number's absolute value
// is odd. You may assume that the argument is a valid integer value.

function odd(int) {
  int % 2 !== 0;
}


// Log all odd numbers from 1 to 99, inclusive, to the console, with each
// number on a separate line.

function logOddsTo99() {
  for (let i = 1; i < 100; i+= 2) {
    console.log(i);
  }
}


// Log all even numbers from 1 to 99, inclusive, to the console, with each number on
// a separate line.

function logEvensTo99() {
  for (let i = 2; i <= 98; i += 2) {
    console.log(i)
  }
}

