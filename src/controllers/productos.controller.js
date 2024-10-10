const {Producto, Fabricante, Componente} = require('../models')

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

controller.updateProduct = async (req,res) =>{
  const {nombre,descripcion,precio,pathImg} = req.body
  const id = req.params.id
  const producto = await Producto.findByPk(id)
  producto.nombre = nombre,
  producto.descripcion = descripcion,
  producto.precio = precio,
  producto.pathImg = pathImg
  await producto.save()
  res.status(200).json(producto)
}

controller.deleteSerieById = async (req,res) => {
  const idProducto = req.params.id
  const filasAfectadas = await Producto.destroy({where:{id:idProducto}})
  res.status(204).json({mensaje : `filas afectadas ${filasAfectadas}`})
}

controller.addComponenteToProducto = async (req,res) => {
  const arrayDeComponentes = req.body
  const id = req.params.id
  const producto = await Producto.findByPk(id)

  const promesas = []
  arrayDeComponentes.forEach(com =>{
    promesas.push(Componente.create(com))
  })

  const componentes = await Promise.all(promesas)
  producto.addComponentes(componentes)
  res.status(201).json({message:'componentes agregados al producto'})
}

controller.getComponentesByProducto = async (req, res) => {
  const id = req.params.id
  const productoConComponentes = await Producto.findOne({
    where: {id}, 
    include: [{
      model: Componente,
      as: 'componentes',
      attributes: ['id','nombre','descripcion'],
      through: { attributes: [] }
    }]
  }) 
  res.status(200).json(productoConComponentes)
}




module.exports = controller