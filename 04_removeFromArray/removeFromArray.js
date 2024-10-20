const removeFromArray = function(array, ...args) {

    // let indexRemove = list.indexOf(itemArray);

    // list.splice(indexRemove, 1);

    // console.log(itemArray)
    //return list;

    return array.filter(x => !args.includes(x));
};


console.log(removeFromArray([1,2,3,4], 2, 3))

// Do not edit below this line
module.exports = removeFromArray;
