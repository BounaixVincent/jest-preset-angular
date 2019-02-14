let cities = [];


exports.sum = (a, b) => {
    return a + b;
};

exports.getData = async () => {
    let data = await peanut();
    return data;
};

exports.peanut = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 2000);
    });
};

exports.initializeCityDatabase = () => {
    cities = [
        'Paris',
        'Nancy',
        'Strasbourg',
        'Vannes'
    ];
};

exports.clearCityDatabase = () => {
    cities = [];
};

exports.pourChaque = (items, callback) => {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
};
