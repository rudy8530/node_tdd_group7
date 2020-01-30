'use strict';
/* module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Post.associate = (models) => {
    Post.belongsTo(models.Author)
  }
  return Post;
}; */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  titre: String,
  contenu: String
})

module.exports = mongoose.model('Post', postSchema)