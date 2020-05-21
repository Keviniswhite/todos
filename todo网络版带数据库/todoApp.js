const express = require('express')

const app = express()


app.get()

const port = 3000

const log = console.log.bind(console)
const todoInit = () => {
    log(` run in ${port}`)
}
app.listen(port, todoInit)