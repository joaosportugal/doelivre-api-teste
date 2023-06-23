import express from 'express'
import productRoute from './productRoute.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Pagina inicial')
    })
    
    app.use(
        express.json(),
        productRoute
    )
}

export default routes