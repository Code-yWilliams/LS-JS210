const isCount = value => Number.isInteger(value) && value >= 0;

function repeat(string, times) {
  if (!isCount(times)) {
    return undefined;
  }

  let repeated = '';
  for (let counter = 0; counter < times; counter += 1) {
    repeated += string;
  }

  return repeated;
}

console.log(repeat('abc', 2));