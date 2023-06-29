import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
        nucleo_id: {type: mongoose.Schema.Types.ObjectId, ref: 'nucleo', required: true},
        description: {type: String, required: true},
        category: {type: String, required: true},
        unit_price: {type: Number,required: true}
    }
)

const ProductModel = mongoose.model("product", productSchema, "produtos")

export default ProductModel

