const express = require('express')
const routes = require('./routes')
//const productoRuta = require('./routes/productos.route')
const db = require('./models')
const crearValoresInicialesDB = require('./seeders/semillaInicial')

const app = express()

app.use(express.json())

app.use(routes)

async function startDB () {
  try {
    await db.sequelize.sync({force:true})
    await crearValoresInicialesDB()
    console.log("Base de datos iniciada correctamente ✅")
  } catch (error) {
    console.log("☠ No se pudo crear la base de datos por:", error)
  }
}

startDB()


const PORT = 3000
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})