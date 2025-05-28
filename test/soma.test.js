const soma = require('../src/soma');

test('A soma de 1 + 3 é igual a 4', () => {
    expect(soma(1,3)).toBe(4);
});