import mongoose from "mongoose";

const nucleoSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        region: {type: Number, required: true}
    },
    {
        versionKey: false
    }
)

const NucleoModel = mongoose.model("nucleo", nucleoSchema, "nucleos")

export default NucleoModel

