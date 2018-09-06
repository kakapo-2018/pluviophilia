const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/', function(req, res){
    db.getMusic()
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