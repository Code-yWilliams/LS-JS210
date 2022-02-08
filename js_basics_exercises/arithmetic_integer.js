function printNums() {
  let first = prompt("==> Enter the first number:\n");
  let second = prompt("==> Enter the second number:\n");
  
  console.log(`==> ${first} + ${second} = ${ first + second}`);
  console.log(`==> ${first} - ${second} = ${ first - second}`);
  console.log(`==> ${first} * ${second} = ${ first * second}`);
  console.log(`==> ${first} / ${second} = ${ first / second}`);
  console.log(`==> ${first} % ${second} = ${ first % second}`);
  console.log(`==> ${first} ** ${second} = ${ first ** second}`);
}

printNums()