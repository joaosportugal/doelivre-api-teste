import express from "express";

const app = express();

app.use(express.json());

const products = [
    { 
        id: 1,
        name: 'chocolate cake',
        donor: 'fulano',
        category: 'alimentary',
        unit_price: 23,
        description: 'A delicious cake made with love', 
        image: 'link_to_image'
    },
    { 
        id: 2,
        name: 'breuzinho',
        donor: 'ciclano',
        category: 'aromatherapy',
        unit_price: 15,
        description: 'It promotes the mental concentration', 
        image: 'link_to_image2'
    }
];

app.get('/', (req, res) => {
    res.status(200).send('Doelivre App')
})

app.get('/products', (req, res) => {
    res.status(200).json(products)
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