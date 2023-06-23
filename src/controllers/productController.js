import ProductModel from "../models/Product.js"

class ProductController {
    static listProducts = async (req, res) => {
        try {
            const products = await ProductModel.find()
            res.status(200).send(products)
        } catch (err) {
            res.status(500).send({message: `Erro ao encontrar produtos. ${err}`})
        }
    }

    static registerProduct = async (req, res) => {
        try {
            const product = new ProductModel(req.body)
            await product.save()
            res.status(201).send(product)
        } catch (err) {
            res.status(500).send({message: `Falha ao cadastrar o produto: ${err.message}`})
        }
    }

    static updateProduct = async (req, res) => {
        const { id } = req.params
        try {
            await ProductModel.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: 'Produto atualizado com sucesso'})
            
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }

    static listProductById = async (req, res) => {
        const { id } = req.params
        try {
            const product = await ProductModel.findById(id)
            res.status(200).send(product)
        } catch (err) {
            res.status(400).send(`Erro ao encontrar produto: ${err}`)
        }
    }

    static deleteProduct = async (req, res) => {
        const { id } = req.params
        try {
            await ProductModel.findByIdAndDelete(id)
            res.status(200).send({message: "produto excluído com sucesso"})
        } catch (err) {
            res.status(400).send(`Erro ao encontrar produto: ${err}`)
        }
    }
}

export default ProductController