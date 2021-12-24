const express = require('express')
const cors = require('cors')
const catRoutes = require('./routes/CatRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1', [
  catRoutes,
])

app.listen(8001, () => console.log('Listening on the port 8001'))

exports.app = app
