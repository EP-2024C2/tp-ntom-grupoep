const {Router} = require('express')
const productoRoute = require('./productos.route')

const routes = Router()
routes.use(productoRoute)

module.exports = routes