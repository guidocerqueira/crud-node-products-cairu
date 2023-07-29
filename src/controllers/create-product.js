//importação do database.js
const database = require('../database')

//controlador para criar um produto
function createProduct(requisicao, resposta) {
	//armazena o body da requisição na constante produto
	const produto = requisicao.body

	//adiciona o produto no database (array de produtos)
	database.push(produto)
	
	//retorna a resposta com status 201 contendo o produto adicionado
	return resposta.status(201).json(produto)
}

module.exports = createProduct