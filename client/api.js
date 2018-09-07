import request from 'superagent'


export function saveSong (song, callback) {
    request.post('/api/v1/')
    .send(song)
    .end((err,res)=> {
        callback(err,res.body)
    })
}

export function playSong(music, callback) {
    request.get('api/v1/')
    .get(music)
    .end((err, res) => {
        callback(err, res.body)
    })
}
