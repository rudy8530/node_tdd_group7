'use strict';
require ('./post')
/* module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  Author.associate = (models) => {
    Author.hasMany(models.Post)
  }
  return Author;
}; */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
  firstName: String,
  lastName: String,
})

module.exports = mongoose.model('Author', authorSchema)