const {Componente, Producto} = require('../models')

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

controller.getProductosByComponente = async (req, res) => {
  const id = req.params.id
  const componenteConProductos = await Componente.findOne({
    where: {id}, 
    include: [{
      model: Producto,
      as: 'productos',
      attributes: ['id','nombre','descripcion', 'precio', 'pathImg'],
      through: { attributes: [] }
    }]
  }) 
  res.status(200).json(componenteConProductos)
}

controller.createComponente = async (req, res) => {
  const {nombre, descripcion} = req.body
  const componente = await Componente.create({nombre, descripcion})
  res.status(201).json(componente)
}

controller.updateComponente = async (req, res) => {
  const id = req.params.id
  const {nombre, descripcion} = req.body
  const componente = await Componente.findByPk(id)
  await componente.update({nombre, descripcion})
  res.status(200).json(componente)
}

controller.deleteComponente = async (req, res) => {
  try {
    const id = req.params.id
    const filasAfectadas = await Componente.destroy({where : {id}})
    res.status(204).json({mensaje: `filas afectadas ${filasAfectadas}`})    
  } catch (error) {
    res.status(500).json({mensaje:`error al intentar eliminar el archivo: ${error}`})
  }
}

module.exports = controller