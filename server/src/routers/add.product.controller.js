const express = require('express')
const routerAddProduct = express.Router()
const product = require('../controller/product.controller')

routerAddProduct.post('/addproduct', product.addProduct);


module.exports = routerAddProduct;