const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const router = require('./router/init.js')
app.use(express.static("public"))

app.use(bodyParser.json())





const log = console.log.bind(console)







const port = 3000
const todoInit = () => {
    log(` run in ${port}`)
}


app.listen(port, todoInit)

module.exports = app