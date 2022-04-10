const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'; // cumbersome with "" and ''
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; // template literal `` to the rescue
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log('string with \n\
multiple \n\
lines'); // cumbersome with "" and ''

console.log(`string
with 
multiple 
lines`); // template literal `` to the rescue 