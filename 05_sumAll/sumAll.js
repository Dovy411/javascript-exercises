const sumAll = function(numOne, numTwo) {

    if (numOne<0 || numTwo<0 || !Number.isInteger(numOne) || !Number.isInteger(numTwo)) {return "ERROR";}

    let finalSum = 0;
    
    if (numOne < numTwo) {
        for (let i=numOne; i<=numTwo; i++) {finalSum += i;};
        return finalSum;
    } else {
        for (let i=numTwo; i<=numOne; i++) {finalSum += i;};
        return finalSum;
    }
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;


