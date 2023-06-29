import express from 'express'
import productRoute from './productRoute.js'
import userRoute from './userRoute.js'
import nucleoRoute from './nucleoRoute.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Pagina inicial')
    })
    
    app.use(
        express.json(),
        productRoute,
        userRoute,
        nucleoRoute
    )
}

export default routes