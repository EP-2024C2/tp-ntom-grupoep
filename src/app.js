const express = require('express')
const db = require('./models')

const app = express()


async function startDB () {
  try {
    await db.sequelize.sync({force:true})
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