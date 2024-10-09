const {Router} = require('express')
const { productosController } = require('../controllers')


const routes = Router()

routes.get('/productos', productosController.getAllProductos)

routes.post('/productos',productosController.createProducto)

routes.get('/productos/:id',productosController.getProductoById)

routes.get('/productos/:id/fabricantes', productosController.getFabricantesByProducto)

routes.get('/productos/:id/componentes',productosController.getComponentesByProducto) // el que hay que revisar

routes.post('/productos/:id/fabricantes', productosController.addFabricanteToProducto)

routes.post('/productos/:id/componentes',productosController.addComponenteToProducto)

routes.put('/productos/:id',productosController.updateProduct)


routes.delete('/productos/:id',productosController.deleteSerieById)

module.exports = routes