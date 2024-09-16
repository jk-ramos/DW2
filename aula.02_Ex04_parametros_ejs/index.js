// Importando o Express (CommonJS Modules)
const express = require("express")
// Iniciando o express na variável app
const app = express()

// Definindo o EJS para renderizar páginas HTML
app.set('view engine', 'ejs')

// Criando a primeira rota (ROTA PRINCIPAL)
app.get("/", (req, res) => {
    // Será renderizada a página 'views\index.ejs'
    res.render('index')
})
// ROTA PERFIL
app.get("/perfil", (req, res) => { 
    res.render('perfil')
})
// ROTA VÍDEOS
app.get("/videos", (req, res) => {
    res.render('videos')
})

// ROTA PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
    let produto = req.params.produto
    // Array com os produtos
    let produtos = ['Computador', 'Celular', 'Tablet', 'Notebook']
    res.render('produtos', {
        // Enviando variáveis para página
        produto : produto,
        produtos : produtos
    })
})

// ROTA PEDIDOS
app.get("/pedidos", (req, res) => {
    // Array de objetos com os pedidos
    let pedidos = [
        {produto: "Celular", preco: 12000}, 
        {produto: "Computador", preco: 3000}, 
        {produto: "Tablet", preco: 2000}, 
        {produto: "Notebook", preco: 3800}
    ]
    res.render('pedidos', {
        // Enviando o array de objetos para página
        pedidos : pedidos
    })
})

// ROTA CLIENTES
app.get("/clientes", (req, res) => {
    // Array de objetos com os pedidos
    let clientes = [
        {nome: "Vinicius Arai Pereira", cpf: "777.111.111-00", cidade: "Registro"}, 
        {nome: "Juliano Souza", cpf: "222.888.222-00", cidade: "Eldorado"}, 
        {nome: "Caio Silva", cpf: "333.333.999-00", cidade: "Jacupiranga"}, 
        {nome: "Ricardo Mendes", cpf: "444.444.555-00", cidade: "Cajati"}
    ]
    res.render('clientes', {
        // Enviando o array de objetos para página
        clientes : clientes
    })
})

// Iniciando o servidor
app.listen(8080, function(erro){
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})