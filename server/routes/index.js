import express from 'express'
import categoriesRouter from './categories.router.js'
import booksRouter from './books.router.js'

const router = express.Router({ mergeParams: true })

// router.use('/auth', authRouter)
router.use('/books', booksRouter)
// router.use('/users', usersRouter)
//  router.use('/comments', commentsRouter)
router.use('/categories', categoriesRouter)

export default router
