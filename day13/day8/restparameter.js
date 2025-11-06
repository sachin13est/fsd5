// Using rest parameter
function fun(...args) {
    console.log(args); // shows all arguments as array
    const sum = args.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

console.log(fun(1,2,3,4,5,6,7,8,9));


