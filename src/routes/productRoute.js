import express from 'express'
import ProductController from '../controllers/productController.js'

const router = express.Router()

router
    .get("/produtos", ProductController.listProducts)
    .get("/produtos/:id", ProductController.listProductById)
    .post("/produtos", ProductController.registerProduct)
    .put("/produtos/:id", ProductController.updateProduct) 
    .delete("/produtos/:id", ProductController.deleteProduct)

export default router