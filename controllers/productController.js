const Product = require('../models/productModel');

//@desc     Get all products
//@route    GET /api/products
async function getProducts(req, res) {
    try{
        const products = await Product.findAll()
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(products));
        res.end();
    } catch(error){
        console.log(error);
    }
}

//@desc     Get a Product
//@route    GET /api/products/id
async function getProduct(req, res, id) {
    try{
        const product = await Product.findById(id)
        if(!product){
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({message: 'Product Not Found' }));
            res.end();
        }
        else{
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(product));
            res.end();
        }
    } catch(error){
        console.log(error);
    }
}
//@desc     Create a Product
//@route    POST /api/products
async function createProduct(req, res) {
    try{
        const test_product = {
            title: 'test Product',
            description: 'This is a test product description',
            price: 100
        }

        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        })
        req.on('end', async () => {
            const { id, title, description, price } = JSON.parse(body);
            const product = {
                id,
                title,
                description,
                price
            }            
            const newProduct = await Product.create(product);
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.write(JSON.stringify( newProduct));
            res.end()
        })
    } catch(error){
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
}