import { reverseString } from "./reverse.js";

test('"hello" returns "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
}); 

test('"first example" returns "elpmaxe tsrif"', () => {
    expect(reverseString('first example')).toBe('elpmaxe tsrif');
}); 

test('Error when the input is not a string', () => {
    expect(() => reverseString(576)).toThrow();
}) 

test('Error when the input is not a string', () => {
    expect(() => reverseString([])).toThrow();
}) 