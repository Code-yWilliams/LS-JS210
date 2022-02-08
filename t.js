function copyObj(obj, keysArray = Object.keys(obj)) {
  let result = {}
  keysArray.forEach(key => result[key] = obj[key])
  return result
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);
