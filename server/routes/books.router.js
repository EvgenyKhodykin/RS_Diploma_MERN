import express from 'express'
import Book from '../models/Book.js'

const booksRouter = express.Router({ mergeParams: true })

booksRouter.get('/', async (request, response) => {
    try {
        const list = await Book.find()
        response.status(200).send(list)
    } catch (error) {
        response.status(500).json({ message: 'Server error. Can not get books' })
    }
})

export default booksRouter
