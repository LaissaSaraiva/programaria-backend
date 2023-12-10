const express = require('express'); // Inicia o Express
const router = express.Router(); // Configura a primeira parte da rota

const app = express(); // Inicia o App
const porta = 3333; // Cria a porta

// Cria lista inicial de mulheres - estática
const mulheres = [
  {
    nome: 'Simara Conceição',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora e instrutora'
  },
  {
    nome: 'Iana Chan',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Fundadora e CEO da Programaria'
  },
  {
    nome: 'Nat F Dev',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Artista de CSS'

  }
]
// Função relacionada ao método get
function mostraMulheres(request, response) {
  response.json(mulheres)
}

// Configura rota 'get'
app.use(router.get('/mulheres', mostraMulheres));

//  Servidor ouvindo a porta - função anônima
app.listen(porta, () => {
  console.log(`Servidor criado e rodando na porta: ${porta}.`);
})