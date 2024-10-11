const Joi = require('joi')

const componentesSchema = Joi.object().keys({
  nombre: Joi.string().required().min(2).max(255).messages({
    "any.required":"nombre es requerido",
    "string.min":"el nombre debe tener como mínimo {#limit} caracteres",
    "string.max":"el nombre debe tener como máximo {#limit} caracteres",
    "string.empty":"nombre no puede estar vacío"
  }),
  descripcion: Joi.string().max(255).messages({
    "string.max":"la descripción debe tener como máximo {#limit} caracteres"
  })
})

module.exports = componentesSchema