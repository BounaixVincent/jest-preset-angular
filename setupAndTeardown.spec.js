"use strict";
// const initializeCityDatabase = require('./sum');
// const clearCityDatabase = require('./sum');
var cities = [];
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
describe('Setup And Teardown', function () {
    describe('Repeating Setup For Many Tests', function () {
        beforeEach(function () {
            initializeCityDatabase();
        });
        afterEach(function () {
            clearCityDatabase();
        });
        test('city database has Nancy', function () {
            expect(cities.includes('Nancy')).toBeTruthy();
        });
        test('city database has Vannes', function () {
            expect(cities.includes('Vannes')).toBeTruthy();
        });
    });
    describe('One-Time Setup', function () {
        beforeAll(function () {
            initializeCityDatabase();
        });
        afterAll(function () {
            clearCityDatabase();
        });
        test('city database has Nancy', function () {
            expect(cities.includes('Nancy')).toBeTruthy();
        });
        test('city database has Vannes', function () {
            expect(cities.includes('Vannes')).toBeTruthy();
        });
    });
    describe('Scoping', function () {
    });
});
