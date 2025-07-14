const removeFromArray = function(arr, num) {
    let removedItems = arr.splice(num-1, 1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
