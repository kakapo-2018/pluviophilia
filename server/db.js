const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getMusic(id, testConn){
    const conn = testConn || connection
    return conn('music')
    .select()
}



function getMusicID(id, testConn){
    const conn = testConn || connection
    return conn('music')
    .where('id', id)
    .select()
    .first()
}





module.exports = {
    getMusic,
    getMusicID
}

