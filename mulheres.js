const express = require('express'); // Inicia o Express
const router = express.Router(); // Configura a primeira parte da rota
const { v4: uuidv4 } = require('uuid'); // Inicia a Uuid

const conectaBancoDeDados = require('./banco-de-dados') //Conecta o servidor ao arquivo banco-de-dados.js
conectaBancoDeDados(); //Chama função.

const Mulher = require('./mulherModel') // Chama o Model Mulher - regras da criação do Objeto Mulher.
const app = express(); // Inicia o App
app.use(express.json()); // Informa que a partir de agora os dados serão enviados em formato json
const porta = 3333; // Cria a porta
//  OBS: Toda função atrelada a rota receber por parametros (request, response)

// GET - Função relacionada ao método get
async function mostraMulheres(request, response) {
  try {
    const mulheresVindasDoBancoDeDados = await Mulher.find() // Quando a conexão acontecer eu quero buscar do banco de dados a lista de divas.
    response.json(mulheresVindasDoBancoDeDados)
  } catch(erro) {
    console.log(erro)    
  }
}

// POST
function criaMulher(request, response) {
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
  };
  mulheres.push(novaMulher); // Envia nova mulher para a lista de mulheres
  response.json(mulheres); // Envia a lista atualizada como resposta em json
}

// PATCH
function corrigeMulher(request, response) {
  function encontraMulher(mulher) {
    if(mulher.id === request.params.id) {
      return mulher
    }
  }

  const mulherEncontrada = mulheres.find(encontraMulher);

  if(request.body.nome) {
    mulherEncontrada.nome = request.body.nome
  }

  if(request.body.imagem) {
    mulherEncontrada.imagem = request.body.imagem
  }

  if(request.body.minibio) {
    mulherEncontrada.minibio = request.body.minibio
  }

  response.json(mulheres)
}

// DELETE
function deletaMulher(request, response) {
  function todasMenosEla(mulher) {
    if(mulher.id !== request.params.id) {
      return mulher;
    }
  }

  const mulheresQueFicam = mulheres.filter(todasMenosEla);
  response.json(mulheresQueFicam);
}

// Configura rota 'Get'
app.use(router.get('/mulheres', mostraMulheres));

// Configura rota 'Post'
app.use(router.post('/mulheres', criaMulher));

// Configura rota 'Patch'
app.use(router.patch('/mulheres/:id', corrigeMulher));

// Configura rota 'Delete'
app.use(router.delete('/mulheres/:id', deletaMulher));

//  Servidor ouvindo a porta - função anônima
app.listen(porta, () => {
  console.log(`Servidor criado e rodando na porta: ${porta}.`);
})