'use strict'
function inputIsValid(x, y) {
    if (x > y) {
        return false;
    }

    if (x < 1 || y > 1000) {
        return false;
    }
    
    return true;
}

function calculateAlignedMultiplicationTable(x, y) {
    var str = "";

    
    return str;
}

function createMultiplicationTable(x, y) {
    if (!inputIsValid(x, y)) {
        return null;
    }

    return calculateAlignedMultiplicationTable(x, y);
}

module.exports = createMultiplicationTable;