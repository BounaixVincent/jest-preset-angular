"use strict";
var model = require('./sum');
describe('Tests for a tutorial', function () {
    it('adds 1 + 2 to equal 3', function () {
        expect(model.sum(1, 2)).toBe(3);
    });
    it('object assignment', function () {
        var data = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 });
    });
    it('adding positive numbers is not zero', function () {
        for (var a = 1; a < 10; a++) {
            for (var b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0);
            }
        }
    });
});
