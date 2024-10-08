const {Producto} = require('../models')

const controller = {}

const getAllProductos = async (req, res) => {
  const productos = await Producto.findAll({})
  res.status(200).json(productos)
}
controller.getAllProductos = getAllProductos

const getProductoById= async (req, res)=>{
  const idProducto = req.params.id
  const producto = await Producto.findOne( {
      where: {id : idProducto}
  })
  res.status(200).json(producto)
}
controller.getProductoById = getProductoById

const createProducto = async(req,res) => {
  const {nombre,descripcion,precio,pathImg} = req.body
  const producto = await Producto.create({
    nombre : nombre,                        // Se le puede saca el value ya que es lo mismo porque llevan el mismo nombre, lo dejo por si acaso
    descripcion : descripcion,
    precio : precio,
    pathImg : pathImg
  })
  res.status(201).json(producto)
}

controller.createProducto = createProducto

module.exports = controller