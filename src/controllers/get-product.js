//importação do database.js
const database = require('../database')

//controlador para obter apenas um produto
function getProduct(requisicao, resposta){
	//obtem o codigo do produto passado na url
	const codeProduct = requisicao.params.code

	//buscar o produto no banco de dados
	const produtoEncontrado = database.find((item) => {
		return item.code === Number(codeProduct)
	})

	//verifica se o produto foi encontrado
	if(!produtoEncontrado){
		return resposta.status(404).json('Produto não encontrado')
	}

	//retorna o produto encontrado
	return resposta.status(200).json(produtoEncontrado)
}

module.exports = getProduct