import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        donor: {type: String, required: true},
        category: {type: String, required: true},
        unit_price: {type: Number,required: true},
        description: {type: String, required: true},
        image: {type: String}
    }
)

const ProductModel = mongoose.model('produtos', productSchema)

export default ProductModel

