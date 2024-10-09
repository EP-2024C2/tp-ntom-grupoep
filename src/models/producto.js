'use strict';
const { Model } = require('sequelize');
//const Componente = require('./componente');

module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.belongsToMany(models.Componente,{through:'Producto_Componente'})
      Producto.belongsToMany(models.Fabricante,{
        through:'Producto_Fabricante',
        as: 'fabricantes'
      })
    }
  }
  Producto.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: DataTypes.STRING,
    precio: {
      type:DataTypes.FLOAT,
      allowNull: false
    },
    pathImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
    timestamps: false
  });
  return Producto;
};