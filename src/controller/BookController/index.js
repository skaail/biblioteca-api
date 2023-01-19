const Book = require('../../model/Book')

const BookController = {

    async createBook(req, res){
        const bodyData = req.body

        try{
            const newBook = await Book.create(bodyData)
            return res.status(200).json(newBook)
        }
        catch(err){
            return res.status(400).json(err)
        }
    },

    async getBooks(req, res){
        try{
            const allBooks = await Book.find()
            return res.status(200).json(allBooks)
        }
        catch(err){
            return res.status(400).json(err)
        }
    }

}

module.exports = BookController