const removeFromArray = function(arr, ...targets) {
    return arr.filter(x => !targets.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
