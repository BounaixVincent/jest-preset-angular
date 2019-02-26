const model = require('./sum');
import axios from 'axios';
import Users from './users';

jest.mock('axios');

describe('Mock Functions', () => {
    describe('Using a mock function', () => {
        const mockCallback = jest.fn(x => 42 + x);
        beforeEach(() => {
            model.pourChaque([0, 1], mockCallback);
        });

        it('should check if the mock function is called twice', () => {
            expect(mockCallback.mock.calls.length).toBe(2);
        });

        it('should check if the first argument of the first call to the function was 0', () => {
            expect(mockCallback.mock.calls[0][0]).toBe(0);
        });

        it('should check if the first argument of the second call to the function was 1', () => {
            expect(mockCallback.mock.calls[1][0]).toBe(1);
        });

        it('should check if the return value of the first call to the function was 42', () => {
            expect(mockCallback.mock.results[0].value).toBe(42);
        });

        describe('.mock property', () => {
            let myMock = jest
                .fn()
                .mockImplementation(boolean => 'return value')
                .mockImplementationOnce(boolean => boolean)
                .mockImplementationOnce(boolean => boolean);
            let anotherMock = jest
                .fn((value) => {
                    return {value};
                })
                .mockName('Test')

            beforeEach(() => {
                myMock(true);
                myMock(false);

            });

            afterEach(() => {
                // Otherwise, instances increment
                jest.clearAllMocks();
            });

            it('should check if the function was exactly called twice', () => {
                expect(myMock.mock.calls.length).toBe(2);
            });

            it('should check if the first arg of the first call to the function was true', () => {
                expect(myMock.mock.calls[0][0]).toBeTruthy()
            });

            it('should check if the second arg of the first call to the function was false', () => {
                expect(myMock.mock.calls[0][1]).toBeFalsy()
            });

            it('should check if the return value of the first call to the function was "return value', () => {
                expect(myMock.mock.results[0].value).toBe('return value');
            });

            it('should check if this function was instantiated exactly twice', () => {
                expect(myMock.mock.instances.length).toBe(2);
            });

            it.skip('should check if the object returned by the first instantiation of this function' +
                ' had a `name` property whose value was set to "Test"', () => {
                /*expect(anotherMock.mock.instances[0].name).toBe('Test');*/
                console.log(anotherMock.mock.instances)
                expect(anotherMock.mock.instances[0].name).toBe('Test')
            });
        });
    });

    describe('Mock Return Values', () => {
        const myMock = jest.fn();
        const filterTestFn = jest
            .fn()
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false);


        beforeEach(() => {

        });

        myMock
            .mockReturnValueOnce(10)
            .mockReturnValueOnce('x')
            .mockReturnValue(true);

        it('should return 10 then "x" then true', () => {
            expect(myMock()).toBe(10);
            expect(myMock()).toBe('x');
            expect(myMock()).toBe(true);
        });

        it.skip('should return [11] for the value and [[11], [12]] for the calls', () => {
            const result = [11].filter(filterTestFn)
            expect(result).toEqual([11]);
            expect(filterTestFn.mock.calls).toBe([[11], [12]]);
        });
    });

    describe('Mocking Modules', () => {

        it.skip('should fetch users', () => {
            const users = [{name: 'Bob'}];
            const resp = {data: users};
            axios.get.mockResolvedValue(resp);
            // or you could use the following depending on your use case:
           // axios.get.mockImplementation(() => Promise.resolve(resp));
            return Users.all().then(resp => expect(resp.data).toEqual(users));
        });
    });

    describe('Mock Implementations', () => {

        const myMock = jest
            .fn(() => 'default')
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => false);

        it('should test mock implementations', () => {
            /*myMock((err, val) => console.log(true));
            myMock((err, val) => console(false));*/
            // console.log(myMock(), myMock(), myMock(), myMock());
        });
    });

    describe('Custom Matchers', () => {
        const mockCallback = jest.fn(x => 42 + x);
        beforeEach(() => {
            model.pourChaque([0, 1], mockCallback);
        });
        it('should test some custom matchers supplied by Jest', () => {
            expect(mockCallback).toBeCalled();
            expect(mockCallback).toBeCalledWith(0);
            expect(mockCallback).lastCalledWith(1);
        });
    });

});