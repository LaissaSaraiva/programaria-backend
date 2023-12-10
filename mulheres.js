const express = require('express'); // Inicia o Express
const router = express.Router(); // Configura a primeira parte da rota
const { v4: uuidv4 } = require('uuid'); // Inicia a Uuid

const app = express(); // Inicia o App
app.use(express.json()); // Informa que a parti de agora os dados serão reuisiado em formato json
const porta = 3333; // Cria a porta

// Cria lista inicial de mulheres - estática
const mulheres = [
  {
    id: 1,
    nome: 'Simara Conceição',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora e instrutora'
  },
  {
    id: 2,
    nome: 'Iana Chan',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Fundadora e CEO da Programaria'
  },
  {
    id: 3,
    nome: 'Nat F Dev',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Artista de CSS'

  }
]
//  OBS: Toda função atrelada a rota receber por parametros (request, response)

// GET - Função relacionada ao método get
function mostraMulheres(request, response) {
  response.json(mulheres)
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
  response.json(mulheres); // Envia a lista atualizada como resposta
}

// Configura rota 'Get'
app.use(router.get('/mulheres', mostraMulheres));

// Configura rota 'Post'
app.use(router.post('/mulheres', criaMulher));

//  Servidor ouvindo a porta - função anônima
app.listen(porta, () => {
  console.log(`Servidor criado e rodando na porta: ${porta}.`);
})