require('dotenv').config()
const io = require('socket.io-client')
const path = require('path')
const ss = require('socket.io-stream')
const fs = require('fs')

const url = process.env.URL
const socket = io(url)

socket.on('connect', () => {
  console.log('successfully connected')
})

ss(socket).on('file', function (stream, data) {
  const fileName = path.basename(data.name)
  stream.pipe(fs.createWriteStream(`./${fileName}`))
})
