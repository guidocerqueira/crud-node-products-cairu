//importação do express
const express = require('express')
const createProduct = require('./controllers/create-product')
const listProducts = require('./controllers/list-products')
const getProduct = require('./controllers/get-product')
const deleteProduct = require('./controllers/delete-product')
const updateProduct = require('./controllers/update-product')

//instância do express
const routes = express()

//rota post para cadastrar um produto
routes.post('/products', createProduct)

//rota get para listar varios produtos
routes.get('/products', listProducts)

//rota get para obter apenas um produto
routes.get('/products/:code', getProduct)

//rota delete para excluir um produto
routes.delete('/products/:code', deleteProduct)

//rota update para atualizar um produto
routes.put('/products/:code', updateProduct)

//exportação do routes
module.exports = routes