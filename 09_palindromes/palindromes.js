const palindromes = function (word) {
    let newWord = word.replace(/[\.,?!]/g, '');
    let revWord = newWord.split("").reverse().join("");
    revWord = revWord.toLowerCase().replace(/\s/g, '');
    newWord = newWord.toLowerCase().replace(/\s/g, '');
    if (revWord == newWord) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;


// npm test palindromes.spec.js

console.log(palindromes("Racecar!"));