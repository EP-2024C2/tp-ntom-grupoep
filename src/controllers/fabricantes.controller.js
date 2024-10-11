const {Fabricante, Producto} = require('../models')
const { message } = require('../schemas/productos.schema')

const controller = {}

controller.getAllFabricantes = async (_, res) => {
  const fabricantes = await Fabricante.findAll({})
  res.status(200).json(fabricantes)
}

controller.getFabricanteById = async (req, res) => {
  const id = req.params.id
  const fabricante = await Fabricante.findOne({where:{id}})
  res.status(200).json(fabricante)
}

controller.getProductosByFabricante = async (req, res) => {
  const id = req.params.id
  const fabricanteConProductos = await Fabricante.findOne({
    where: {id}, 
    include: [{
      model: Producto,
      as: 'productos',
      attributes: ['id','nombre','descripcion', 'precio', 'pathImg'],
      through: { attributes: [] }
    }]
  }) 
  res.status(200).json(fabricanteConProductos)
}

controller.createFabricante = async (req, res) => {
  const {nombre, direccion, numeroContacto, pathImgPerfil} = req.body
  const fabricante = await Fabricante.create({nombre, direccion, numeroContacto, pathImgPerfil})
  res.status(201).json(fabricante)
}

controller.updateFabricante = async (req,res) =>{
  const {nombre,descripcion,numeroContacto,pathImgPerfil} = req.body
  const id = req.params.id
  const fabricante = await Fabricante.findByPk(id)
  await fabricante.update({nombre, descripcion, numeroContacto, pathImgPerfil})
  res.status(200).json(fabricante)
}

controller.deleteFabricante = async(req,res) => {
  try {
    const id = req.params.id
    const filasAfectadas = await Fabricante.destroy({where : {id}})
    res.status(204).json({mensaje: `filas afectadas ${filasAfectadas}`})    
  } catch (error) {
    res.status(500).json({mensaje:`error al intentar eliminar el archivo: ${error}`})
  }
}

module.exports = controller