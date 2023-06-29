import NucleoModel from "../models/Nucleo.js"

class NucleoController {
    static listNucleos = async (req, res) => {
        try {
            const nucleos = await NucleoModel.find()
            res.status(200).send(nucleos)
        } catch (err) {
            res.status(500).send({message: `Erro ao encontrar nucleos. ${err}`})
        }
    }

    static registerNucleo = async (req, res) => {
        try {
            const nucleo = new NucleoModel(req.body)
            await nucleo.save()
            res.status(201).send(nucleo)
        } catch (err) {
            res.status(500).send({message: `Falha ao cadastrar o nucleo: ${err.message}`})
        }
    }

    static updateNucleo = async (req, res) => {
        const { id } = req.params
        try {
            await NucleoModel.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: 'nucleo atualizado com sucesso'})
            
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }

    static getNucleoById = async (req, res) => {
        const { id } = req.params
        try {
            const nucleo = await NucleoModel.findById(id)
            res.status(200).send(nucleo)
        } catch (err) {
            res.status(400).send(`Erro ao encontrar nucleo: ${err}`)
        }
    }

    static deleteNucleo = async (req, res) => {
        const { id } = req.params
        try {
            await NucleoModel.findByIdAndDelete(id)
            res.status(200).send({message: "nucleo excluído com sucesso"})
        } catch (err) {
            res.status(400).send(`Erro ao encontrar nucleo: ${err}`)
        }
    }
}

export default NucleoController