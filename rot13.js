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

function rotate(charCode) {
  const ROTATION = 13;

  if ((charCode >= 97 && charCode <= 109) || 
      (charCode >= 65 && charCode <= 78)) {
        charCode += ROTATION;
  } else if ((charCode >= 110 && charCode <= 122) ||
             (charCode >= 79 && charCode <= 90)) {
               charCode -= ROTATION;
             }

  return charCode;
}

function rot13(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let currentCharCode = string.charCodeAt(i);
    let rotatedCharCode = rotate(currentCharCode);
    result += String.fromCharCode(rotatedCharCode);
  }
  
  return result;
}