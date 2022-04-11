// type conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`)); // this will result in NaN = Not a Number
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log(`I am ` + 23 + ` years old`); // 23 is converted to string
console.log(`23` - `10` - 3); // 23 and 10 are converted to numbers
console.log(`23` / `2`) // 23 and 2 are converted to numbers - same with *