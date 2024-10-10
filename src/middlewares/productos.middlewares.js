const {Producto} = require('../models')
const middleware = {}

middleware.validateIdProducto = async (req, res, next) => {
  const id = req.params.id
  const producto = await Producto.findByPk(id)
  if(!producto){
    return res.status(404).json({message:`no existe un producto con id: ${id}`})
  }
  next()
}




module.exports = middleware