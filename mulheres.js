const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

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

console.log( typeof mulheres)
function mostraMulheres(request, response) {
  response.json(mulheres)
}

app.use(router.get('/mulheres', mostraMulheres));

app.listen(porta, () => {
  console.log(`Servidor criado e rodando na porta: ${porta}.`);
})