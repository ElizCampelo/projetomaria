const express = require('express')

const app = express()
const router = express.Router()
const porta = 3333

const mulheres = [
    {
       nome: 'Simara Conceição',
       image: 'http://github.com/simaraconceicao.png',
       minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',     
        minibio: 'CEO & Founder da PrograMaria'
     
     
    },
    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    }

]

function mostrarPorta() {

    console.log('Servidor criado e rodando na porta: ', porta)
    
}

function mostraMulheres(request,response) {
    response.json(mulheres)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostrarPorta)