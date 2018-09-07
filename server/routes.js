const express = require('express')
const router = express.Router()

const db = require('./db')

router.post('/', (req, res) => {
    db.saveSong(song)
    .then(ids => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', function(req, res){
    db.getMusic(req.body)
    .then(music => {
        res.json(music)
    })
})

router.get('/:id', function(req, res){
    db.getMusicID(req.params.id)
    .then(music => {
        res.json(music)
    })
})

module.exports = router