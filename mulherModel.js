// Criando Model

// Chama o pacote mongoose para o arquivo
const mongoose = require('mongoose');


// Montando o model com a abstração do moongose. Cada propriedade também é um objeto
const MulherSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    required: true
  },
  citacao: {
    type: String,
    required: true
  },
  minibio: {
    type: String,
    required: true
  }
})

// 'diva' é o nome da collection ( lista de mulheres) O MongoDb vai adiciona o 's' de plural
module.exports = mongoose.model('diva',  MulherSchema)