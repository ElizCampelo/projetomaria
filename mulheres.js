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
    },
    {
		id: '00e4f720-7c0d-4481-8121-293b656acee0',
		nome: "Luana Pimentel",
        imagem:"",
		minibio: "Desenvolvedora Senor"
	},
	{
		id: '7d856b15-44b7-4282-ae8d-02f7e89323c8',
		nome: "Carlota",
        imagem:"",
		minibio: "Desenvolvedora Senor"
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
