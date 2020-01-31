const mongoose = require('mongoose')
const Schema = mongoose.Schema

let schema = new mongoose.Schema({
    type: String,
    id: String
})

module.exports = mongoose.model('Data', schema, 'data')