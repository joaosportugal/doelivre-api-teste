import express from 'express'
import NucleoController from '../controllers/nucleoController.js'

const router = express.Router()

router
    .get("/nucleos", NucleoController.listNucleos)
    .get("/nucleos/:id", NucleoController.getNucleoById)
    .post("/nucleos", NucleoController.registerNucleo)
    .put("/nucleos/:id", NucleoController.updateNucleo) 
    .delete("/nucleos/:id", NucleoController.deleteNucleo)

export default router