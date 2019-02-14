// const initializeCityDatabase = require('./sum');
// const clearCityDatabase = require('./sum');

let cities = [];

function initializeCityDatabase() {
    cities = [
        'Paris',
        'Nancy',
        'Strasbourg',
        'Vannes'
    ];
}

function clearCityDatabase() {
    cities = [];
}

describe('Setup And Teardown', () => {
    describe('Repeating Setup For Many Tests', () => {
        beforeEach(() => {
            initializeCityDatabase();
        });

        afterEach(() => {
            clearCityDatabase();
        });

        test('city database has Nancy', () => {
            expect(cities.includes('Nancy')).toBeTruthy();
        });

        test('city database has Vannes', () => {
            expect(cities.includes('Vannes')).toBeTruthy();
        });
    });

    describe('One-Time Setup', () => {
        beforeAll(() => {
            initializeCityDatabase();
        });

        afterAll(() => {
            clearCityDatabase();
        });

        test('city database has Nancy', () => {
            expect(cities.includes('Nancy')).toBeTruthy();
        });

        test('city database has Vannes', () => {
            expect(cities.includes('Vannes')).toBeTruthy();
        });
    });

    describe('Scoping', () => {

    })
})