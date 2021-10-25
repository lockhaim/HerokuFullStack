const mongoose = require('mongoose')
const Schema = mongoose.Schema
const albumSchema = new Schema({
  album_name: {type: String, required: true},
  album_genre: String,
  album_img: String,
  album_track_list: Array,
  album_artistID: {type: String, required: true}
})

const Album = mongoose.model('Album', albumSchema)
module.exports = Album
