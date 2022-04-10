const age = 19;

if (age >= 18) {
    console.log(`Sarah can start driving 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙂`);
}

const brithYear = 1991;
let century;

if (brithYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);