import UserModel from "../models/User.js"

class UserController {
    static listUsers = async (req, res) => {
        try {
            const users = await UserModel
            .find()
            .populate('nucleo_id')
            .exec()
            res.status(200).send(users)
        } catch (err) {
            res.status(500).send({message: `Erro ao encontrar produtos. ${err}`})
        }
    }

    static registerUser = async (req, res) => {
        try {
            const user = new UserModel(req.body)
            await user.save()
            res.status(201).send(user)
        } catch (err) {
            res.status(500).send({message: `Falha ao cadastrar o usuário: ${err.message}`})
        }
    }

    static updateUser = async (req, res) => {
        const { id } = req.params
        try {
            await UserModel.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: 'usuário atualizado com sucesso'})
            
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }

    static listUserById = async (req, res) => {
        const { id } = req.params
        try {
            const user = await UserModel
            .findById(id)
            .populate('nucleo_id')
            .exec()
            res.status(200).send(user)
        } catch (err) {
            res.status(400).send(`Erro ao encontrar usuário: ${err}`)
        }
    }

    static deleteUser = async (req, res) => {
        const { id } = req.params
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).send({message: "usuário excluído com sucesso"})
        } catch (err) {
            res.status(400).send(`Erro ao encontrar usuário: ${err}`)
        }
    }
}

export default UserController