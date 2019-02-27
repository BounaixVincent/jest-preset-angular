describe.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    '.add(%i, %i)',
    (a, b, expected) => {
        it(`returns ${expected}`, () => {
            expect(a + b).toBe(expected);
        });

        it(`returned value not be greater than ${expected}`, () => {
            expect(a + b).not.toBeGreaterThan(expected);
        });

        it(`returned value not be less than ${expected}`, () => {
            expect(a + b).not.toBeLessThan(expected);
        });
    }
);