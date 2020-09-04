const config = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const GET = require('./controllers/GET')
const POST = require('./controllers/POST')

server.use(cors())
server.use(cookieParser())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))
server.use(GET)
server.use(POST)

const connection = server.listen(config.PORT, console.info(`Server running on http://localhost:${config.PORT}/`))
connection.on('connection', connection => {
    console.info(connection.address())
})

connection.on('error', error => {
    console.error(error)
})