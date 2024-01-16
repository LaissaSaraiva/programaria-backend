// Chama a depência instalada no projeto
const mongoose = require("mongoose");

async function conectaBancoDeDados() {
  try {
    console.log("A conexão com o Banco de Dados foi iniciada.");
    // await libera Node para atender outras demandas enquanto o MongoDb nõa responde
    await mongoose.connect(
      "mongodb+srv://laissasaraiva:7QcBmpNz4vxfWWZ1@clustermulheres.17jerno.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("A conexão com o Banco de Dados realizada com sucesso.");
  } catch (erro) {
    console.log(erro);
  }
}

// async await/ JavaScript asincrono, fora disso atende uma demanda por vez

//Exporta a função conectaBancoDeDados para que ela possa ser utilizada em outros arquivos do seu projeto. Essencialmente, isso torna a função disponível para outros módulos que requerem este arquivo.

module.exports = conectaBancoDeDados; 