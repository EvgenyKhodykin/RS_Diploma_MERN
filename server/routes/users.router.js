import express from 'express'
import authMiddleware from '../middleware/auth.middleware.js'
import {
    getUsersHandler,
    patchSingleUserHandler
} from '../controllers/users.controllers.js'

const usersRouter = express.Router({ mergeParams: true })

usersRouter.get('/', getUsersHandler)
usersRouter.patch('/:userId', authMiddleware, patchSingleUserHandler)

export default usersRouter
