import request from 'superagent'


export function saveSong (song, callback) {
    request.post('/api/v1/')
    .send(song)
    .end((err,res)=> {
        callback(err,res.body)
    })
}