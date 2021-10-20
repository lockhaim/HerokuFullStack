const express = require('express')
const jams = express.Router()
const seed = require('../models/seed.js')
const Artist = require('../models/artist.js')

//Index
jams.get('/', (req, res) => {
  Artist.find({}, (err, allArtists) => {
    res.render('index.ejs', {
      artist: allArtists
    })
  })
})



//New
jams.get('/new', (req, res) => {
  res.render('new.ejs')
})


//Seed
jams.get('/seed', (req, res) => {
  Artist.deleteMany({}, () => {})
  Artist.create(seed, (err, data) => {
    res.redirect('/')
  })
})

module.exports = jams
