const express = require('express'); 

// Método express() já vem no próprio package express. Cria o servidor

const app = express();
const porta = 3333;

function mostraPorta() {
  console.log(`Servidor criado e rodando na porta: ${porta}.`);
}

// Abaixo a função não é chamada com parenteses, pq quem irá chamar a função é o servidor. Porém há uma regra: só chamará após escutar uma porta
app.listen(porta, mostraPorta);
