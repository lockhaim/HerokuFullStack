const express = require('express')
const jams = express.Router()
const seed = require('../models/seed.js')
const Artist = require('../models/artist.js')

//Index
jams.get('/', (req, res) => {
  Artist.find({}, (err, allArtists) => {
    res.render('index.ejs', {
      artists: allArtists
    })
  })
})

//New
jams.get('/new', (req, res) => {
  res.render('new.ejs')
})

jams.post('/', (req, res) => {
  Artist.create(req.body, (err, createdArtist) => {
    if(err){
      console.log(err)
    } else {
      console.log(req.body)
      res.redirect('/')
    }
  })
})

//EDIT
jams.get('/:id/edit', (req, res) => {
  Artist.findById(req.params.id, (err, foundArtist) => {
    res.render('edit.ejs', {
      artist: foundArtist
    })
  })
})

jams.put('/:id', (req, res) => {
  Artist.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
    res.redirect('/')
  })
})

//Delete
jams.delete('/:id', (req, res) => {
  Artist.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect('/')
  })
})

//Seed
jams.get('/seed', (req, res) => {
  Artist.deleteMany({}, () => {})
  Artist.create(seed, (err, data) => {
    res.redirect('/')
  })
})

//Show
jams.get('/:id', (req, res) => {
  Artist.findById(req.params.id, (err, foundArtist) => {
    res.render('show.ejs', {
      artist: foundArtist
    })
  })
})
module.exports = jams
