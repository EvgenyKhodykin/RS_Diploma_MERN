import express from 'express'
import { getBooksHandler } from '../controllers/books.controllers.js'

const booksRouter = express.Router({ mergeParams: true })

booksRouter.get('/', getBooksHandler)

export default booksRouter
