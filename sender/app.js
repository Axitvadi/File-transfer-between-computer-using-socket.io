const fs = require('fs')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

const ss = require('socket.io-stream')

const stream = ss.createStream()

server.listen(3000, () => {
  console.log('server successfully started on port 3000')
})

io.on('connection', (socket) => {
  console.log('new user connected with id ', socket.id)
  const istream = fs.createReadStream('./test.pdf')

  ss(socket).emit('file', stream, { name: 'test.pdf' })

  istream.pipe(stream)
})
