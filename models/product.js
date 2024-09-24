'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: {
      allowNull:false,
      type: DataTypes.STRING,
    },
    type: {
      allowNull:false,
      type: DataTypes.STRING,
    },
    quantity: {
      allowNull:false,
      type: DataTypes.INTEGER,
    },
    price: {
      allowNull:false,
      type: DataTypes.FLOAT,
    },
    userId: {
      allowNull:false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};