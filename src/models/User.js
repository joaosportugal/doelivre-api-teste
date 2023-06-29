import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        nucleo_id: {type: mongoose.Schema.Types.ObjectId, ref: 'nucleo', required: true},
        name: {type: String, required: true},
        tel: {type: String, required: true},
        email: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const UserModel = mongoose.model("user", userSchema, "usuarios")

export default UserModel

