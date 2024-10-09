const {Router} = require('express')
const {componentesController} = require('../controllers')

const routes = Router()

routes.get('/componentes', componentesController.getAllComponentes)
routes.get('/componentes/:id', componentesController.getComponenteById)
routes.post('/componentes', componentesController.createComponente)

module.exports = routes