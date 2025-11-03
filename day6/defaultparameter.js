const isDivisible = (a, b=1) => a % b === 0; //b is default parameter
console.log(isDivisible(4, 2)); // true
console.log(isDivisible(5, 2)); // false
console.log(isDivisible(3)); // true because b defaults to 1
