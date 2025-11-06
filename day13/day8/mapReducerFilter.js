

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const squares = numbers.map(num => num * num);
console.log("Squares:", squares);


const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);


const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);



const sumOfSquaresOfEvens = numbers
  .filter(num => num % 2 === 0)   
  .map(num => num * num)          
  .reduce((acc, curr) => acc + curr, 0);

console.log("Sum of squares of evens:", sumOfSquaresOfEvens);

