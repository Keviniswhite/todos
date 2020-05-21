const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const router = require('./router/init.js')

// 设置静态资源目录
app.use(express.static("public"))
    // 设置html 模板引擎是 pug
app.set('view engine', 'pug')


// 解析交互数据
app.use(bodyParser.json())





const log = console.log.bind(console)







const port = 3000
const todoInit = () => {
    log(` run in ${port}`)
}


app.listen(port, todoInit)

module.exports = app