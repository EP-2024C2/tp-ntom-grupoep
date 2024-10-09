const {Router} = require('express')
const { productosController } = require('../controllers')


const routes = Router()

routes.get('/productos', productosController.getAllProductos)
routes.get('/productos/:id',productosController.getProductoById)
routes.post('/productos',productosController.createProducto)

module.exports = routes