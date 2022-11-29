import { capitalize } from "./capitalize.js";

test('aaa returns AAA', () => {
    expect(capitalize('aaa')).toBe('AAA');
}) 

test('Hello returns Hello', () => {
    expect(capitalize('Hello')).toBe('HELLO');
})

test('Error when the input is not a string', () => {
    expect(() => capitalize(576)).toThrow();
}) 