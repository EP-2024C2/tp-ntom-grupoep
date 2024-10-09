const {Router} = require('express')
const { productosController } = require('../controllers')


const routes = Router()

routes.get('/productos', productosController.getAllProductos)
routes.post('/productos',productosController.createProducto)

routes.get('/productos/:id',productosController.getProductoById)

routes.get('/productos/:id/fabricantes', productosController.getFabricantesByProducto)

routes.post('/productos/:id/fabricantes', productosController.addFabricanteToProducto)

module.exports = routes