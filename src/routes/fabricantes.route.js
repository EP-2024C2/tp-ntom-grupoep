const {Router} = require('express')
const {fabricantesController} = require('../controllers')
const {fabricantesMiddleware} = require('../middlewares')

const routes = Router()

routes.get('/fabricantes', fabricantesController.getAllFabricantes)

routes.get('/fabricantes/:id', fabricantesMiddleware.validateIdFabricante, fabricantesController.getFabricanteById)

routes.get('/fabricantes/:id/productos', fabricantesMiddleware.validateIdFabricante, fabricantesController.getProductosByFabricante)

routes.post('/fabricantes', fabricantesController.createFabricante)

routes.put('/fabricantes/:id', fabricantesMiddleware.validateIdFabricante, fabricantesController.updateFabricante)

routes.delete('/fabricantes/:id', fabricantesMiddleware.validateIdFabricante, fabricantesController.deleteFabricante)

module.exports = routes