const {Componente} = require('../models')
const middleware = {}

middleware.validateIdComponente = async (req, res, next) => {
  const id = req.params.id
  const componente = await Componente.findByPk(id)
  if(!componente){
    return res.status(404).json({message:`no existe un componente con id: ${id}`})
  }
  next()
}




module.exports = middleware