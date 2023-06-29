import express from 'express'
import UserController from '../controllers/userController.js'

const router = express.Router()

router
    .get("/usuarios", UserController.listUsers)
    .get("/usuarios/:id", UserController.listUserById)
    .post("/usuarios", UserController.registerUser)
    .put("/usuarios/:id", UserController.updateUser) 
    .delete("/usuarios/:id", UserController.deleteUser)

export default router