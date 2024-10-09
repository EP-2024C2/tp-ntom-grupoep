const {Fabricante} = require('../models')

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

controller.createFabricante = async (req, res) => {
  const {nombre, direccion, numeroContacto, pathImgPerfil} = req.body
  const fabricante = await Fabricante.create({nombre, direccion, numeroContacto, pathImgPerfil})
  res.status(201).json(fabricante)
}

controller.updateFabricante = async (req,res) =>{
  const {nombre,descripcion,numeroContacto,pathImgPerfil} = req.body
  const id = req.params.id
  const fabricante = await Fabricante.findByPk(id)
  fabricante.nombre = nombre,
  fabricante.descripcion = descripcion,
  fabricante.numeroContacto = numeroContacto,
  fabricante.pathImgPerfil = pathImgPerfil
  await fabricante.save()
  res.status(200).json(fabricante)
}

controller.deleteFabricante = async(req,res) => {
  const idDelFabricante = req.params.id
  const fabricante = await Fabricante.destroy({where : {id:idDelFabricante}})
  res.status(204).json({mensaje: `filas afectadas ${fabricante}`})
}

module.exports = controller