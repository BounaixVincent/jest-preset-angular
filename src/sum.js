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
module.exports = sum, getData, peanut;