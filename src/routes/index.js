const { Router } = require('express')
const routes = Router()

const BookController = require('../controller/BookController')
const UserController = require('../controller/UserController')

routes.get('/', (req, res) => {
    res.send('Olá Mundo')
})

routes.post('/book', BookController.createBook)
routes.get('/book', BookController.getBooks)

routes.post('/user', UserController.createUser)
routes.get('/user', UserController.getUser)

module.exports = routes