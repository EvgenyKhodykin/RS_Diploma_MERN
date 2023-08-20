import express from 'express'
import { check } from 'express-validator'
import {
    postSignInWithPasswordHandler,
    postSignUpHandler,
    postTokenHandler
} from '../controllers/auth.controllers.js'

const authRouter = express.Router({ mergeParams: true })

authRouter.post('/signUp', [
    check('email', 'Неверный email').isEmail(),
    check('password', 'Минимальная длина пароля 8 символов').isLength({ min: 8 }),
    postSignUpHandler
])

authRouter.post('/signInWithPassword', [
    check('email', 'Некорректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль!').exists(),
    postSignInWithPasswordHandler
])

authRouter.post('/token', postTokenHandler)

export default authRouter
