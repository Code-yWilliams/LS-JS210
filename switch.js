let a = 5;

switch (a) {
  case (5 || 6):
    console.log('a is 6');
    break
  case 7:
    console.log('a is 7');
    break
  default:
    console.log('a is neither 6,nor 7');
}