"use strict";
describe('Using Matchers', function () {
    describe('Truthiness', function () {
        it('null', function () {
            var n = null;
            expect(n).toBeNull();
            expect(n).toBeDefined();
            expect(n).not.toBeUndefined();
            expect(n).not.toBeTruthy();
            expect(n).toBeFalsy();
        });
        it('zero', function () {
            var z = 0;
            expect(z).not.toBeNull();
            expect(z).toBeDefined();
            expect(z).not.toBeUndefined();
            expect(z).not.toBeTruthy();
            expect(z).toBeFalsy();
        });
    });
    describe('Numbers', function () {
        it('two plus two', function () {
            var value = 2 + 2;
            expect(value).toBeGreaterThan(3);
            expect(value).toBeGreaterThanOrEqual(3.5);
            expect(value).toBeLessThan(5);
            expect(value).toBeLessThanOrEqual(4.5);
            // toBe and toEqual are equivalent for numbers
            expect(value).toBe(4);
            expect(value).toEqual(4);
        });
        it('adding floating point numbers', function () {
            var value = 0.1 + 0.2;
            //expect(value).toBe(0.3);           This won't work because of rounding error
            expect(value).toBeCloseTo(0.3); // This works.
        });
    });
    describe('Strings', function () {
        it('there is no I in team', function () {
            expect('team').not.toMatch(/I/);
        });
        it('but there is a "stop" in Christoph', function () {
            expect('Christoph').toMatch(/stop/);
        });
    });
    describe('Arrays', function () {
        var shoppingList = [
            'diapers',
            'kleenex',
            'trash bags',
            'paper towels',
            'beer',
        ];
        it('the shopping list has beer on it', function () {
            expect(shoppingList).toContain('beer');
        });
    });
    describe('Exception', function () {
        function compileAndroidCode() {
            throw ('you are using the wrong JDK');
        }
        it('compiling android goes as expected', function () {
            expect(compileAndroidCode).toThrow();
            // expect(compileAndroidCode).toThrow(ConfigError);
            // You can also use the exact error message or a regexp
            expect(compileAndroidCode).toThrow('you are using the wrong JDK');
            expect(compileAndroidCode).toThrow(/JDK/);
        });
    });
});
