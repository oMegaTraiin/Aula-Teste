const soma = require('../src/soma');

test('A soma de 1 + 3 é igual a 4', () => {
    expect(soma(1,3)).toBe(4);
});

test('A soma de 5 + 3 é igual a 8', () => {
    expect(soma(5,3)).toBe(8);
});

test('A soma de 5 + 5 é igual a 10', () => {
    expect(soma(5,3)).toBe(8);
});