const createMultiplicationTable = require("../multiply");

it("x > y should return null", function() {
    // Given
    const x = 5;
    const y = 3;

    // When 
    const table = createMultiplicationTable(x, y);

    // Then
    expect(table).toBe(null);
});

it("x or y not in range 1-1000 should return null", function() {
    // Given
    const x = 1;
    const y = 1001;

    // When 
    const table = createMultiplicationTable(x, y);

    // Then
    expect(table).toBe(null);
});

it("x or y not in range 1-1000 should return null", function() {
    // Given
    const x = 0;
    const y = 3;

    // When 
    const table = createMultiplicationTable(x, y);

    // Then
    expect(table).toBe(null);
});

it("2, 4 should return aligned multiplication table", function() {
    // Given
    const x = 2;
    const y = 4;

    // When 
    const table = createMultiplicationTable(x, y);
    const expected = "";

    // Then
    expect(table).toBe(expected);
});