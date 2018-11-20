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

function getColPadding(x, y) {
    let colPadding = new Array();
    for (let i = x; i <= y; i++) {
        let string = i + "*" + y + "=" +  (i*y);
        colPadding.push(string.length + 2);
    }
    return colPadding;
}

function createTableElement(i, j) {
    return i + "*" + j + "=" +  (i*j) + "";
}

function addElementToTable(table, element, padding) {
    table = table + element;
    for (let i = 0; i < (padding - element.length); i++) {
        table = table + " ";
    }
    return table;
}

function calculateAlignedMultiplicationTable(x, y) {
    let table = "";
    let count;
    let padding;
    let colPadding = getColPadding(x, y);

    for (let j = x; j <= y; j++) {
        count = 0;
        for (let i = x; i <= j; i++) {
            if (i != j) {
                padding = colPadding[count];
            } else {
                padding = 0;
            }
            
            table = addElementToTable(table, createTableElement(i, j), padding);
            count++;
        }
        if (j != y) {
            table += "\n";
        }
    }

    console.log(table);
    return table;
}

function createMultiplicationTable(x, y) {
    if (!inputIsValid(x, y)) {
        return null;
    }

    return calculateAlignedMultiplicationTable(x, y);
}

module.exports = createMultiplicationTable;