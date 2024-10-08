const {Producto, Fabricante, Componente} = require('../models')

const crearValoresInicialesDB = async () => {
  try {
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

    prod1.addComponentes([comp3, comp4])
    /*
    @TODO: terminar semilla
    */
    
  } catch (error) {
    console.log("no se pudo ☠")
  }
}

module.exports = crearValoresInicialesDB