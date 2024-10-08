'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Componente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Componente.belongsToMany(models.Producto, {through: 'Producto_Componente'})
    }
  }
  Componente.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Componente',
    timestamps: false
  });
  return Componente;
};