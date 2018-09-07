import request from 'superagent'


export function saveSong (song, callback) {
    request.post('/api/v1/')
    .send(song)
    .end((err,res)=> {
        callback(err,res.body)
    })
}

export function playSong(callback) {
    request.get('api/v1/')
    .end((err, res) => {
        callback(err, res.body.song)
    })
}
