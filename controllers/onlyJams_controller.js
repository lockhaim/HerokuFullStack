const express = require('express')
const jams = express.Router()
const seed = require('../models/seed.js')
const Artist = require('../models/artist.js')
const Album = require('../models/album.js')

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

//Index
jams.get('/', (req, res) => {
  Artist.find({}, (err, allArtists) => {
    res.render('index.ejs', {
      artists: allArtists,
      currentUser: req.session.currentUser
    })
  })
})

//New ARTIST
jams.get('/new', (req, res) => {
  res.render('new.ejs', {
    currentUser: req.session.currentUser
  })
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

//New ALBUM
// jams.get('/:id/new_album', isAuthenticated, (req, res) => {
//   res.render('new_album.ejs', {
//     currentUser: req.session.currentUser
//   })
// })
//
// jams.post('/:id/albums', isAuthenticated, (req, res) => {
//   Album.create(req.body, (err, createdAlbum) => {
//     if(err) {
//       console.log(err)
//     } else {
//       console.log(req.body)
//       res.redirect('/onlyjams/:id')
//     }
//   })
// })

//EDIT
jams.get('/:id/edit', (req, res) => {
  Artist.findById(req.params.id, (err, foundArtist) => {
    res.render('edit.ejs', {
      artist: foundArtist,
      currentUser: req.session.currentUser
    })
  })
})

jams.put('/:id', isAuthenticated, (req, res) => {
  Artist.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
    res.redirect('/')
  })
})

//Delete
jams.delete('/:id', isAuthenticated, (req, res) => {
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
      artist: foundArtist,
      currentUser: req.session.currentUser
    })
  })
})
module.exports = jams
