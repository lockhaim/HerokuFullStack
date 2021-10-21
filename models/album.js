const mongoose = require('mongoose')
const Schema = mongoose.Schema
const albumSchema = new Schema({
  name: {type: String, required: true},
  genre: String,
  img: String,
  track_list: Array,
})

const Album = mongoose.model('Album', albumSchema)
module.exports = Album
