import calculator from "./calculator";

test('add(1,6) returns 7', () => {
    expect(calculator.add(1,6)).toBe(7);
})

test('subtract(8,10) returns -2', () => {
    expect(calculator.subtract(8,10)).toBe(-2);
})

test('multiply(3,5) returns 15', () => {
    expect(calculator.multiply(3,5)).toBe(15);
})

test('divide(10,2) returns 5', () => {
    expect(calculator.divide(10,2)).toBe(5);
})

test('add("2",4) throws an error', () => {
    expect(() => calculator.add("2",4)).toThrow();
}) 