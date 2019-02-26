jest.mock('../__mocks__/request');

// import * as user from './async';
let user = require('./async');

describe.skip('Async Example', () => {
    // The assertion for a promise must be returned.
    it('works with promises', () => {
        // expect.assertions(1);
        return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
    });

    it('works with async/await', async () => {
        // expect.assertions(1);
        const data = await user.getUserName(4);
        expect(data).toEqual('Mark');
    });
});