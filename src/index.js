//importação do express
const express = require('express')
const routes = require('./routes')

//instância do express
const app = express()

//usar o middleware do json para definir o tipo de dados trafegado entre as requisições
app.use(express.json())

//importação de todas as rotas do arquivo routes.js
app.use(routes)

//expor a porta 3000
app.listen(3000, () => {
	console.log('servidor inicializado')
})