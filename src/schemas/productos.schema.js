const Joi = require('joi')
const validateImagenUrl = require('../utils/imagen.validator')

const productosSchema = Joi.object().keys({
  nombre: Joi.string().required().min(5).max(255).messages({
    "any.required":"nombre es requerido",
    "string.min":"el nombre debe tener como mínimo {#limit} caracteres",
    "string.max":"el nombre debe tener como máximo {#limit} caracteres",
    "string.empty":"nombre no puede estar vacío"
  }),
  descripcion: Joi.string().max(255).messages({
    "string.max":"la descripción debe tener como máximo {#limit} caracteres",
  }),
  precio: Joi.number().precision(2).required().min(0.01).messages({
    "any.required":"precio es requerido",
    "string.min":"el precio debe ser como mínimo {#limit}",
    "string.empty":"el precio no puede estar vacío"
  }),
  pathImg: Joi.string().custom(validateImagenUrl).messages({
    "any.custom":"La extensión de la imagen no se reconoce"
  })

})

module.exports = productosSchema