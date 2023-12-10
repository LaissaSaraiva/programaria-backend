const express = require('express');

// Configurando a rota com as configurações do express
const router = express.Router();

const app = express()
const porta = 3333

function mostraMensagem(request, response) {
  response.send("<h1>Olá, mundo!</h1>")
}

function mostraPorta() {
  console.log('Servidor criado e rodando na porta', porta);
  console.log('Para parar o servidor digite CTRL + C')
}

// Criar o endereço/ola
app.use(router.get('/ola', mostraMensagem))

app.listen(porta, mostraPorta)