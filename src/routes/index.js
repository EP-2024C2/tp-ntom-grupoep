const {Router} = require('express')
const productosRoute = require('./productos.route')
const fabricantesRoute = require('./fabricantes.route')

const routes = Router()
routes.use(productosRoute)
routes.use(fabricantesRoute)

module.exports = routes