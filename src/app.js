import express from "express";
import db from "./config/dbConnect.js";
import products from "./models/Product.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
    res.status(200).send('Página Inicial')
})

app.get('/products', (req, res) => {
    products.find((err, products) => {
        res.status(200).json(products)
    })
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const index = buscarLivro(id)
    res.status(200).send(products[index])
})

app.post('/products', (req, res) => {
    products.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
})

app.put('/products/:id', (req, res) => {
    const { id } = req.params
    const index = buscarLivro(id)
    products[index] = req.body
    res.status(201).send(products)
})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    const index = buscarLivro(id)
    products.splice(index, 1)
    res.status(200).send(products)
})

const buscarLivro = (id) => {
    return products.findIndex(livro => livro.id == id)
}

export default app