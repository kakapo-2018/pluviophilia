const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getMusic



function getMusicID





module.exports = {
    getMusic,
    getMusicID
}

