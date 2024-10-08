const {Producto} = require('../models')

const controller = {}

const getAllProductos = async (req, res) => {
  const productos = await Producto.findAll({})
  res.status(200).json(productos)
}
controller.getAllProductos = getAllProductos



module.exports = controller