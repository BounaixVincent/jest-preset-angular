function sum(a, b) {
    return a + b;
}

async function getData() {
    let data = await peanut();
    return data;
}

function peanut() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 2000);
    });
}

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

function pourChaque(items, callback) {
    for (let index = 0; index < items.length; items++) {
        callback(items[items]);
    }
}

module.exports = sum, getData, peanut, initializeCityDatabase, clearCityDatabase;