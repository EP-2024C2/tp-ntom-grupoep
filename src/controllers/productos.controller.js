const {Producto} = require('../models')

const controller = {}

controller.getAllProductos = async (req, res) => {
  const productos = await Producto.findAll({})
  res.status(200).json(productos)
}


controller.getProductoById = async (req, res)=>{
  const idProducto = req.params.id
  const producto = await Producto.findOne( {
      where: {id : idProducto}
  })
  res.status(200).json(producto)
}

controller.createProducto = async(req,res) => {
  const {nombre,descripcion,precio,pathImg} = req.body
  const producto = await Producto.create({ nombre, descripcion, precio, pathImg })
  res.status(201).json(producto)
}

module.exports = controller