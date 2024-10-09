const {Producto, Fabricante, Componente} = require('../models')

const crearValoresInicialesDB = async () => {
  try {
    const fab1 = await Fabricante.create({
      nombre: 'TechCorp',
      numeroContacto: "+123456789",
      direccion: "1234 Elm St, Ciudad",
      pathImgPerfil: "/images/fabricantes/techcorp.jpg"
    })
    const fab2 = await Fabricante.create({
      nombre: 'Innovatech',
      numeroContacto: "+987654321",
      direccion: "4567 Oak Ave, Ciudad",
      pathImgPerfil: "/images/fabricantes/innovatech.jpg"
    })
    const prod1 = await Producto.create({
      nombre: 'Laptop X200', 
      descripcion: 'Una laptop de alto rendimiento', 
      precio: 1200.99, 
      pathImg: "/images/productos/laptop-x200.jpg"
    })
    const prod2 = await Producto.create({
      nombre: 'Smartphone S5', 
      descripcion: 'Teléfono inteligente con pantalla OLED', 
      precio: 799.99, 
      pathImg: "/images/productos/smartphone-s5.jpg"
    })

    const comp1 = await Componente.create({
      nombre: "Pantalla OLED 6.5 pulgadas",
      descripcion: "Pantalla de alta definición"
    })
    const comp2 = await Componente.create({
      nombre: 'Bateria 4000 mAh',
      descripcion: 'Batería de larga duración'
    })
    const comp3 = await Componente.create({
      nombre: 'Procesador Intel i7',
      descripcion: 'Procesador de octava generación'
    })
    const comp4 = await Componente.create({
      nombre: 'SSD 1TB',
      descripcion: 'Disco sólido de 1TB de capacidad'
    })

    await fab1.addProductos([prod1, prod2])
    await prod1.addComponentes([comp3, comp4])
    await prod2.addComponentes([comp1, comp2])
    await prod1.addFabricantes([fab1, fab2])
    
  } catch (error) {
    console.log("☠ Error al crear los valores iniciales de la base de datos:", error)
  }
}

module.exports = crearValoresInicialesDB