const server = require('./server')

const port = process.env.NODE_ENV || 'development'

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
