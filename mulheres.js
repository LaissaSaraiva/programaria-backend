const express = require('express'); // Inicia o Express
const router = express.Router(); // Configura a primeira parte da rota

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
async function criaMulher(request, response) {
  const novaMulher =  new Mulher({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao
  });

  try {
    const mulherCriada = await novaMulher.save() //Abstração Moongoso para o POST
    response.status(201).json(mulherCriada); // Envia a lista atualizada como resposta em json. // 201 resposta criada
  } catch(erro) {
    console.log(erro)
  }

}

// PATCH
async function corrigeMulher(request, response) {
  try {
    const mulherEncontrada = await Mulher.findById(request.params.id) // comunicação com serviço externo. 'await' para esperar. //findById(PARAMETRO SERÁ ENVIADO NA URL DA REQUISIÇÃO). Encontra a mulher através do mongoose
    
    if(request.body.nome) {
      mulherEncontrada.nome = request.body.nome
    }
  
    if(request.body.imagem) {
      mulherEncontrada.imagem = request.body.imagem
    }
  
    if(request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio
    }
    
    if(request.body.citacao) {
      mulherEncontrada.citacao = request.body.minibio
    }

    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
    response.json(mulherAtualizadaNoBancoDeDados)

  } catch(erro) {
    console.log(erro)
  }
}

// DELETE
async function deletaMulher(request, response) {
  try {
    await Mulher.findByIdAndDelete(request.params.id)
    response.json({mensagem: "Mulher deletada com sucesso!"})
  } catch (erro) {
    console.log(erro)
  }
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