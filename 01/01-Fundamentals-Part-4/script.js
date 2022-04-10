let age = 30; // mutable variable
age = 31; // can be re-assigned

const birthYear = 1993; // immutable
// birthYear = 1990; // cannot be re-assigned

var job = 'programmer'; // old way of declaring similar to let
job = 'teacher'; // also mutable

lastName = 'Schmedtmann'; // no need to user let, const or var
console.log(lastName); // works fine but not recommended