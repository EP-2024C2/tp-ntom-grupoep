const {Componente} = require('../models')

const controller = {}

controller.getAllComponentes = async (_, res) => {
  const componentes = await Componente.findAll({})
  res.status(200).json(componentes)
}

controller.getComponenteById = async (req, res) => {
  const id = req.params.id
  const componente = await Componente.findOne({where: {id}})
  res.status(201).json(componente)
}

controller.createComponente = async (req, res) => {
  const {nombre, descripcion} = req.body
  const componente = await Componente.create({nombre, descripcion})
  res.status(201).json(componente)
}

module.exports = controller