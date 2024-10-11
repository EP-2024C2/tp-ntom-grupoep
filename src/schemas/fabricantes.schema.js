const Joi = require('joi')
const validateImagenUrl = require('../utils/imagen.validator')

const fabricantesSchema = Joi.object().keys({
  nombre: Joi.string().required().min(1).max(255).messages({
    "any.required":"nombre es requerido",
    "string.min":"el nombre debe tener como mínimo {#limit} caracteres",
    "string.max":"el nombre debe tener como máximo {#limit} caracteres",
    "string.empty":"nombre no puede estar vacío"
  }),
  direccion: Joi.string().required().min(5).max(255).messages({
    "any.required":"la dirección es requerida",
    "string.min":"la dirección debe tener como mínimo {#limit} caracteres",
    "string.max":"la dirección debe tener como máximo {#limit} caracteres",
    "string.empty":"la dirección no puede estar vacía"
  }),
  numeroContacto: Joi.string().required().min(8).max(15).messages({
    "any.required":"el numero de contacto es requerido",
    "string.min":"el numero de contacto debe ser como mínimo de {#limit} dígitos",
    "string.max":"el numero de contacto debe tener como máximo {#limit} dígitos",
    "string.empty":"el numero de contacto no puede estar vacío"
  }),
  pathImgPerfil: Joi.string().custom(validateImagenUrl).messages({
    "any.custom":"La extensión de la imagen no se reconoce"
  })

})

module.exports = fabricantesSchema