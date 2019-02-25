jest.mock('../__mocks__/request');

import * as user from './async';

// The assertion for a promise must be returned.
it('works with promises', () => {
    // expect.assertions(1);
    return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});