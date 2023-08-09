import express from 'express'

const router = express.Router({ mergeParams: true })

router.use('/auth', authRouter)
router.use('/books', booksRouter)
router.use('/users', usersRouter)
router.use('/comments', commentsRouter)

export default router
