const {Router} = require('express')
const {componentesController} = require('../controllers')
const {componentesMiddleware} = require('../middlewares')

const routes = Router()

routes.get('/componentes', componentesController.getAllComponentes)
routes.get('/componentes/:id', componentesMiddleware.validateIdComponente, componentesController.getComponenteById)
routes.get('/componentes/:id/productos', componentesMiddleware.validateIdComponente, componentesController.getProductosByComponente)

routes.post('/componentes', componentesController.createComponente)

routes.put('/componentes/:id', componentesMiddleware.validateIdComponente, componentesController.updateComponente)

routes.delete('/componentes/:id', componentesMiddleware.validateIdComponente, componentesController.deleteComponente)

module.exports = routes