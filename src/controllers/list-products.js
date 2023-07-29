//importação do database.js
const database = require('../database')

//controlador para listar varios produtos
function listProducts(requisicao, resposta){
	return resposta.status(200).json(database)
}

module.exports = listProducts