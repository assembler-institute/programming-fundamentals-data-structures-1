const exercise04 = require('../04-exercise');

describe('04-exercise', () => {
    test('add the new names to the names array', () => {
        const actual = ['John', 'Mark', 'Ana', 'Maria'];
        const expected = exercise04();

        expect(actual).toEqual(expect.arrayContaining(expected));
    });
});
