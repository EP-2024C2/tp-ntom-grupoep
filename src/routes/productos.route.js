const {Router} = require('express')
const { productosController } = require('../controllers')
const {productosMiddleware} = require('../middlewares')
const {productosSchema} = require('../schemas')
const schemaValidator = require('../middlewares/schemaValidator')


const routes = Router()

routes.get('/productos', productosController.getAllProductos)

routes.get('/productos/:id', productosMiddleware.validateIdProducto, productosController.getProductoById)

routes.get('/productos/:id/fabricantes', productosMiddleware.validateIdProducto,  productosController.getFabricantesByProducto)

routes.get('/productos/:id/componentes', productosMiddleware.validateIdProducto, productosController.getComponentesByProducto)


routes.post('/productos', 
          schemaValidator(productosSchema), 
          productosController.createProducto
        )

routes.post('/productos/:id/fabricantes', 
              schemaValidator(productosSchema), 
              productosMiddleware.validateIdProducto, 
              productosController.addFabricanteToProducto
            )

routes.post('/productos/:id/componentes', 
            schemaValidator(productosSchema), 
            productosMiddleware.validateIdProducto, 
            productosController.addComponenteToProducto
          )


routes.put('/productos/:id', 
            schemaValidator(productosSchema), 
            productosMiddleware.validateIdProducto, 
            productosController.updateProduct
          )


routes.delete('/productos/:id', productosMiddleware.validateIdProducto, productosController.deleteSerieById)

module.exports = routes