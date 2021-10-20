const mongoose = require('mongoose')
const Schema = mongoose.Schema
const albumSchema = new Schema({
  name: {type: String, required: true},
  genre: String,
  img: String,
  tracks: [{
    name: String,
    duration: String,
  }]
})
