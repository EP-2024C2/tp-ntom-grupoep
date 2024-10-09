const {Router} = require('express')
const productosRoute = require('./productos.route')
const fabricantesRoute = require('./fabricantes.route')
const componentesRoute = require('./componentes.route')

const routes = Router()
routes.use(productosRoute)
routes.use(fabricantesRoute)
routes.use(componentesRoute)

module.exports = routes