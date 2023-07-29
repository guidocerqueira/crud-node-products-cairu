//importação do database.js
const database = require('../database')

//controlador para obter apenas um produto
function updateProduct(requisicao, resposta){
	//obtem o codigo do produto passado na url
	const codeProduct = requisicao.params.code

	//armazena o body da requisição na constante produto
	const produto = requisicao.body

	//buscar o produto no banco de dados
	const produtoEncontrado = database.find((item) => {
		return item.code === Number(codeProduct)
	})

	//verifica se o produto foi encontrado
	if(!produtoEncontrado){
		return resposta.status(404).json('Produto não encontrado')
	}

	//altera o nome do produto com o nome enviado no body
	produtoEncontrado.name = produto.name
	//altera a descrição do produto com a descrição enviado no body
	produtoEncontrado.description = produto.description
	//altera o preço do produto com o preço enviado no body
	produtoEncontrado.price = produto.price

	//retorna o produto encontrado
	return resposta.status(204).send()
}

module.exports = updateProduct