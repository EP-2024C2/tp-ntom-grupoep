const {Fabricante} = require('../models')
const middleware = {}

middleware.validateIdFabricante = async (req, res, next) => {
  const id = req.params.id
  const fabricante = await Fabricante.findByPk(id)
  if(!fabricante){
    return res.status(404).json({message:`no existe un fabricante con id: ${id}`})
  }
  next()
}




module.exports = middleware