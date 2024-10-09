const {Router} = require('express')
const {fabricantesController} = require('../controllers')

const routes = Router()

routes.get('/fabricantes', fabricantesController.getAllFabricantes)
routes.get('/fabricantes/:id', fabricantesController.getFabricanteById)
routes.post('/fabricantes', fabricantesController.createFabricante)


module.exports = routes