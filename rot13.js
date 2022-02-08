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
  const RANGE = { lowerCaseA: 97, lowerCaseM: 109, lowerCaseN: 110,
                  lowerCaseZ: 122, upperCaseA: 65, upperCaseM: 77,
                  upperCaseN: 78, upperCaseZ: 90 }

  if ((charCode >= RANGE['lowerCaseA'] && charCode <= RANGE['lowerCaseM']) || 
      (charCode >= RANGE['upperCaseA'] && charCode <= RANGE['upperCaseM'])) {
        charCode += ROTATION;
  } else if ((charCode >= RANGE['lowerCaseN'] && charCode <= RANGE['lowerCaseZ']) ||
             (charCode >= RANGE['upperCaseN'] && charCode <= RANGE['upperCaseZ'])) {
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



const FOX = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.';
console.log(rot13(FOX) === 'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');
console.log(rot13(rot13(FOX)) === FOX);
