const products = require('../data/products');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products);
    })
}

function findById(id){
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id);
        resolve(product);
    })
}

function create(product) {
    return new Promise((resolve, reject) => {

    })
}

module.exports = {
    findAll,
    findById
}