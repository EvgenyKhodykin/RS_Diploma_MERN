import express from 'express'
import categoriesRouter from './categories.router.js'
import booksRouter from './books.router.js'
import usersRouter from './users.router.js'
import authRouter from './auth.router.js'
import commentsRouter from './comments.router.js'

const router = express.Router({ mergeParams: true })

router.use('/auth', authRouter)
router.use('/books', booksRouter)
router.use('/users', usersRouter)
router.use('/categories', categoriesRouter)
router.use('/comments', commentsRouter)

export default router
