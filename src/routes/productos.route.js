const {Router} = require('express')
const { productosController } = require('../controllers')


const routes = Router()

routes.get('/productos', productosController.getAllProductos)

module.exports = routes