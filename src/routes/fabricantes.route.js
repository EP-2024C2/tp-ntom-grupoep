const {Router} = require('express')
const {fabricantesController} = require('../controllers')

const routes = Router()

routes.get('/fabricantes', fabricantesController.getAllFabricantes)

routes.get('/fabricantes/:id', fabricantesController.getFabricanteById)

routes.get('/fabricantes/:id/productos', fabricantesController.getProductosByFabricante)

routes.post('/fabricantes', fabricantesController.createFabricante)

routes.put('/fabricantes/:id',fabricantesController.updateFabricante)

routes.delete('/fabricantes/:id',fabricantesController.deleteFabricante)

module.exports = routes