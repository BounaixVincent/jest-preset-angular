"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model = require('./sum');
var axios_1 = require("axios");
var users_1 = require("./users");
jest.mock('axios');
describe('Mock Functions', function () {
    describe('Using a mock function', function () {
        var mockCallback = jest.fn(function (x) { return 42 + x; });
        beforeEach(function () {
            model.pourChaque([0, 1], mockCallback);
        });
        it('should check if the mock function is called twice', function () {
            expect(mockCallback.mock.calls.length).toBe(2);
        });
        it('should check if the first argument of the first call to the function was 0', function () {
            expect(mockCallback.mock.calls[0][0]).toBe(0);
        });
        it('should check if the first argument of the second call to the function was 1', function () {
            expect(mockCallback.mock.calls[1][0]).toBe(1);
        });
        it('should check if the return value of the first call to the function was 42', function () {
            expect(mockCallback.mock.results[0].value).toBe(42);
        });
        describe('.mock property', function () {
            var myMock = jest
                .fn()
                .mockImplementation(function (boolean) { return 'return value'; })
                .mockImplementationOnce(function (boolean) { return boolean; })
                .mockImplementationOnce(function (boolean) { return boolean; });
            var anotherMock = jest
                .fn(function (value) {
                return { value: value };
            })
                .mockName('Test');
            beforeEach(function () {
                myMock(true);
                myMock(false);
            });
            afterEach(function () {
                // Otherwise, instances increment
                jest.clearAllMocks();
            });
            it('should check if the function was exactly called twice', function () {
                expect(myMock.mock.calls.length).toBe(2);
            });
            it('should check if the first arg of the first call to the function was true', function () {
                expect(myMock.mock.calls[0][0]).toBeTruthy();
            });
            it('should check if the second arg of the first call to the function was false', function () {
                expect(myMock.mock.calls[0][1]).toBeFalsy();
            });
            it('should check if the return value of the first call to the function was "return value', function () {
                expect(myMock.mock.results[0].value).toBe('return value');
            });
            it('should check if this function was instantiated exactly twice', function () {
                expect(myMock.mock.instances.length).toBe(2);
            });
            it.skip('should check if the object returned by the first instantiation of this function' +
                ' had a `name` property whose value was set to "Test"', function () {
                /*expect(anotherMock.mock.instances[0].name).toBe('Test');*/
                console.log(anotherMock.mock.instances);
                expect(anotherMock.mock.instances[0].name).toBe('Test');
            });
        });
    });
    describe('Mock Return Values', function () {
        var myMock = jest.fn();
        var filterTestFn = jest
            .fn()
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false);
        beforeEach(function () {
        });
        myMock
            .mockReturnValueOnce(10)
            .mockReturnValueOnce('x')
            .mockReturnValue(true);
        it('should return 10 then "x" then true', function () {
            expect(myMock()).toBe(10);
            expect(myMock()).toBe('x');
            expect(myMock()).toBe(true);
        });
        it.skip('should return [11] for the value and [[11], [12]] for the calls', function () {
            var result = [11].filter(filterTestFn);
            expect(result).toEqual([11]);
            expect(filterTestFn.mock.calls).toBe([[11], [12]]);
        });
    });
    describe('Mocking Modules', function () {
        it.skip('should fetch users', function () {
            var users = [{ name: 'Bob' }];
            var resp = { data: users };
            axios_1.default.get.mockResolvedValue(resp);
            // or you could use the following depending on your use case:
            // axios.get.mockImplementation(() => Promise.resolve(resp));
            return users_1.default.all().then(function (resp) { return expect(resp.data).toEqual(users); });
        });
    });
    describe('Mock Implementations', function () {
        var myMock = jest
            .fn(function () { return 'default'; })
            .mockImplementationOnce(function () { return true; })
            .mockImplementationOnce(function () { return false; });
        it('should test mock implementations', function () {
            /*myMock((err, val) => console.log(true));
            myMock((err, val) => console(false));*/
            // console.log(myMock(), myMock(), myMock(), myMock());
        });
    });
    describe('Custom Matchers', function () {
        var mockCallback = jest.fn(function (x) { return 42 + x; });
        beforeEach(function () {
            model.pourChaque([0, 1], mockCallback);
        });
        it('should test some custom matchers supplied by Jest', function () {
            expect(mockCallback).toBeCalled();
            expect(mockCallback).toBeCalledWith(0);
            expect(mockCallback).lastCalledWith(1);
        });
    });
});
