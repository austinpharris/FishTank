const http = require('http');
const { getProducts, getProduct, createProduct, updateProduct, removeProduct } = require('./controllers/productController');

const server = http.createServer((req, res) => {
    //GET ALL PRODUCTS
    if(req.url === '/api/products' && req.method === 'GET'){
            getProducts(req, res);
    }
    //GET SINGLE PRODUCT
    else if( req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET' ){
        const id = req.url.split('/')[3];
        getProduct(req, res, id);
    }
    //POST NEW PRODUCT
    else if(req.url === '/api/products' && req.method === 'POST'){
        createProduct(req, res);
    }
    //PUT PRODUCT
    else if( req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT' ){
        const id = req.url.split('/')[3];
        updateProduct(req, res, id)
    }
    else if( req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'DELETE' ){
        const id = req.url.split('/')[3];
        removeProduct(req, res, id)
    }
    //404
    else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'Route Not Found'}));
        res.end();
    }
})

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));