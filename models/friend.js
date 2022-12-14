'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  friend.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'friend',
  });
  return friend;
};