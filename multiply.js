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

function createTableElement(i, j) {
    return i + "*" + j + "=" +  (i*j) + "";
}

function calculateAlignedMultiplicationTable(x, y) {
    var str = "";

    for (var j = x; j <= y; j++) {
        for (var i = x; i <= j; i++) {
            // console.log("i,j: " + i + "," + j);
            let tmp = (i + "*" + j + "=" +  (i*j) + "");
            // console.log(tmp);
            // str.concat(tmp);
            str = str + tmp;
            // console.log();
        }
        str += "\n";
    }

    console.log(str);
    return str;
}

function createMultiplicationTable(x, y) {
    if (!inputIsValid(x, y)) {
        return null;
    }

    return calculateAlignedMultiplicationTable(x, y);
}

module.exports = createMultiplicationTable;