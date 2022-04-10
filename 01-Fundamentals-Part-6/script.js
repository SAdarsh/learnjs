// test data 1

let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

// test data 2

weightMark = 95;
heightMark = 1.88;

weightJohn = 85;
heightJohn = 1.76;

let bmiMark = weightMark / heightMark ** 2;
let bmiJohn = weightJohn / heightJohn ** 2;

let markHighBMI = false;

if (bmiMark > bmiJohn) markHighBMI = true;

console.log(bmiMark, bmiJohn, markHighBMI)