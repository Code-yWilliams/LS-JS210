let rlSync = require("readline-sync");

let age = Number(rlSync.question("How old are you?\n"));

let decades = [10, 20, 30, 40];

for (let index = 0; index < decades.length; index++) {
  console.log(`In ${decades[index]} years, you will be ${age + decades[index]} years old.`)
}
