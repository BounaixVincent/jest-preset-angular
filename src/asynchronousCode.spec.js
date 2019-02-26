const myMock = jest.fn();
myMock.mockReturnValue('peanut butter');

describe('Testing Asynchronous Code', () => {
    describe('callbacks', () => {
        const fetchData = (callback) => {
            let data = 'peanut butter';
            callback(data);
        };

        it('the data is peanut butter', done => {
            // let data =  'peanut butter';
            const callback = (data) => {
                expect(data).toBe('peanut butter');
                done();
            };

            fetchData(callback);
        });
    });

    describe('Promises', () => {
        const fetchData = new Promise((resolve, reject) => {
            resolve('peanut butter');
            reject('error');
        });

        it('the data is peanut butter', () => {
            return fetchData.then(data => {
                expect(data).toBe('peanut butter');
            });
        });

        describe('.resolves / .rejects', () => {
            it('the data is peanut butter', () => {
                return expect(fetchData).resolves.toBe('peanut butter');
            });
        });
    });

    describe('Async/Await', () => {
        async function getData() {
            let data = await myMock();
            return data;
        }

        it('the data is peanut butter', async () => {
            expect.assertions(1);
            const data = await getData();
            expect(data).toBe('peanut butter');
        });

        it('the data is peanut butter wit async and promise', async () => {
            await expect(getData()).resolves.toBe('peanut butter');
        });
    });
});