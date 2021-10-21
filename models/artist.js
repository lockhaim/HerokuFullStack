const mongoose = require('mongoose')
const Schema = mongoose.Schema
const artistSchema = new Schema({
  name: {type: String, required: true},
  location: String,
  img: String,
  albums: {type: Array}
})

const Artist = mongoose.model('Artist', artistSchema)
module.exports = Artist
