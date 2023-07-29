//importação do database.js
const database = require('../database')

//controlador para obter apenas um produto
function deleteProduct(requisicao, resposta){
	//obtem o codigo do produto passado na url
	const codeProduct = requisicao.params.code

	//buscar o indice do produto
	const indiceProdutoEncontrado = database.findIndex((item) => {
		return item.code === Number(codeProduct)
	})

	//verifica se encontrou ou não o indice do produto
	if(indiceProdutoEncontrado === -1){
		return resposta.status(404).json('Produto não encontrado')
	}

	//exclui o produto
	database.splice(indiceProdutoEncontrado, 1)

	//retorna uma resposta com status 204, sem conteúdo
	return resposta.status(204).send()
}

module.exports = deleteProduct