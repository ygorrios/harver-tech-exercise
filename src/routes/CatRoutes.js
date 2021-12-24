const express = require('express')

const routes = express.Router()
const CatController = require('../controllers/CatController')

// Cat Routes
routes.post('/cat', CatController.catCreateController)

module.exports = routes
