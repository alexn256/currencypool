const max = require('../src/comp.js');

test('max is 2', () => {
    expect(max(1, 2)).toBe(2);
});