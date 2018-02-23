'use strict'

// https://github.com/sindresorhus/p-event

const http = require('http')
const server = http.createServer()
const PORT = process.env.PORT || 5555

const observeOnce = require('p-event')

function createServer() {
  return server
    .on('request', (req, res) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('Hello World!\n')
    })
    .listen(PORT)
}

(async () => {
  const server = createServer()
  await observeOnce(server, 'listening')
  console.log('Server listening on', PORT)
})()
