import express from 'express'
import authMiddleware from '../middleware/auth.middleware.js'
import {
    deleteCommentHandler,
    getCommentsHandler,
    postCommentHandler
} from '../controllers/comments.controllers.js'

const commentsRouter = express.Router({ mergeParams: true })

commentsRouter
    .route('/')
    .get(authMiddleware, getCommentsHandler)
    .post(authMiddleware, postCommentHandler)

commentsRouter.delete('/:commentId', authMiddleware, deleteCommentHandler)

export default commentsRouter
