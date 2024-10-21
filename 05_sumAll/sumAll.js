const sumAll = function(numOne, numTwo) {

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
