const fibonacci = function(number) {

    if (number<0) return "OOPS";

    if (typeof number === "string") {
        number = parseInt(number);
    }

    let num = 1;
    let sum = 0;
    let oldSum = 0;

    for (let i = 1; i <= number; i++) {
        oldSum = sum;
        sum += num;
        num = oldSum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;


// npm test fibonacci.spec.js

console.log(fibonacci(4))