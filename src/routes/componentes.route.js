const {Router} = require('express')
const {componentesController} = require('../controllers')

const routes = Router()

routes.get('/componentes', componentesController.getAllComponentes)
routes.get('/componentes/:id', componentesController.getComponenteById)
routes.get('/componentes/:id/productos', componentesController.getProductosByComponente)

routes.post('/componentes', componentesController.createComponente)

routes.put('/componentes/:id', componentesController.updateComponente)

routes.delete('/componentes/:id', componentesController.deleteComponente)

module.exports = routes