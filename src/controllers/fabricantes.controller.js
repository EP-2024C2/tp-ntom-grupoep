const { where } = require('sequelize')
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


module.exports = controller