const {Producto, Fabricante} = require('../models')

const controller = {}

controller.getAllProductos = async (_, res) => {
  const productos = await Producto.findAll({})
  res.status(200).json(productos)
}

controller.getProductoById = async (req, res)=>{
  const id = req.params.id
  const producto = await Producto.findByPk(id)
  res.status(200).json(producto)
}

controller.createProducto = async(req,res) => {
  const {nombre,descripcion,precio,pathImg} = req.body
  const producto = await Producto.create({ nombre, descripcion, precio, pathImg })
  res.status(201).json(producto)
}

controller.addFabricanteToProducto = async (req, res) => {
  const arrayFabricantes = req.body
  const id = req.params.id
  const producto = await Producto.findByPk(id)
  
  const promesas = []
  arrayFabricantes.forEach( fab => {
    promesas.push(Fabricante.create(fab))
  })

  const fabricantes = await Promise.all(promesas)
  producto.addFabricantes(fabricantes)
  res.status(201).json({message:'fabricantes agregados al producto'})
}

controller.getFabricantesByProducto = async (req, res) => {
  const id = req.params.id
  const productoConFabricantes = await Producto.findOne({
    where: {id}, 
    include: [{
      model: Fabricante,
      as: 'fabricantes',
      attributes: ['id', 'nombre', 'direccion', 'numeroContacto', 'pathImgPerfil'],
      through: { attributes: [] }
    }]
})
  
  res.status(200).json(productoConFabricantes)
}

module.exports = controller