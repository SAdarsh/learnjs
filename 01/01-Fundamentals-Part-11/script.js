// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // converted to false
console.log(Boolean('')); // converted to false
console.log(Boolean(undefined)); // converted to false
console.log(Boolean(null)); // converted to false
console.log(Boolean(NaN)); // converted to false

const money = 0;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}