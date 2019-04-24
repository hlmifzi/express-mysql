const express = require('express')
const http = require('http')
const app = express()

const bodyParser = require('body-parser')
const cors = require('./middleware/cors')
const routes = require('./facade/routes')
const errorhandle = require('./middleware/errorHandling')

app.use(bodyParser.json())
app.use(cors)
app.use(routes)

app.post('/', (req, res) => {
   console.log(req.body)
   res.json({
      title: 'CRUD Expressa'
   })
})

app.use(errorhandle)

http.createServer(app).listen(9999, () => {
   console.log('server express running coy')
})