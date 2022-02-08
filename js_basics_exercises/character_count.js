// In this exercise, you will write a program that asks the user for a phrase,
// then outputs the number of characters in that phrase. Go over the documentation
// for String to find an appropriate method to use.

function printCharCount() {
  let phrase = prompt("Please enter a phrase: ").trim();
  let charCount = parseInt(phrase.length, 10);
  let outputString = `There are ${charCount} characters in ${phrase}.`
  console.log(outputString);
}

printCharCount();

// Since the refactored program shouldn't count spaces, you can use the String.prototype. 
// replace method to return a new string with all spaces removed from it. Go over
// the documentation to see how you can do this. The thing to note here is that the first
// argument passed to replace can be a regular expression pattern.

function printCharCount() {
  let phrase = prompt("Please enter a phrase: ").trim();
  let charCount = parseInt((phrase.replace(/ /g, "").length), 10);
  let outputString = `There are ${charCount} characters in ${phrase}.`
  console.log(outputString);
}