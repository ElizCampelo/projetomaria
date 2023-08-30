const express = require('express')

const app = express()
const router = express.Router()
const porta = 3333

function mostrarPorta() {

    console.log('Servidor criado e rodando na porta: ', porta)
    
}

function mostraMulher(request,response) {
response.json({
    nome: 'Simara Conceição',
    image: 'http://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora e instrutora'
})
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta, mostrarPorta)