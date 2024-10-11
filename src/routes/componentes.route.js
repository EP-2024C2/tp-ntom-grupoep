const {Router} = require('express')
const {componentesController} = require('../controllers')
const {componentesMiddleware} = require('../middlewares')
const {componentesSchema} = require('../schemas')
const schemaValidator = require('../middlewares/schemaValidator')

const routes = Router()

routes.get('/componentes', componentesController.getAllComponentes)
routes.get('/componentes/:id', componentesMiddleware.validateIdComponente, componentesController.getComponenteById)
routes.get('/componentes/:id/productos', componentesMiddleware.validateIdComponente, componentesController.getProductosByComponente)

routes.post('/componentes', schemaValidator(componentesSchema), componentesController.createComponente)

routes.put('/componentes/:id', componentesMiddleware.validateIdComponente,  schemaValidator(componentesSchema), componentesController.updateComponente)

routes.delete('/componentes/:id', componentesMiddleware.validateIdComponente, componentesController.deleteComponente)

module.exports = routes