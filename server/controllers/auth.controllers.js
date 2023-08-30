import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import tokenService from '../services/token.service.js'
import { generateUserData } from '../utils/helpers.js'

export async function postSignUpHandler(request, response) {
    try {
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            return response.status(400).json({
                error: {
                    message: 'INVALID_DATA',
                    code: 400,
                    errors: errors.array()
                }
            })
        }

        const { email, password } = request.body

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return response.status(400).json({
                error: {
                    message: 'EMAIL_EXISTS',
                    code: 400
                }
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = await User.create({
            ...generateUserData(),
            ...request.body,
            password: hashedPassword
        })

        const tokens = tokenService.generate({ _id: newUser._id })
        await tokenService.save(newUser._id, tokens.refreshToken)

        response.status(201).send({ ...tokens, userId: newUser._id })
    } catch (error) {
        response.status(500).json({ message: 'Server error. Can not signUp' })
    }
}

export async function postSignInWithPasswordHandler(request, response) {
    try {
        const errors = validationResult(request)

        if (!errors.isEmpty()) {
            return response.status(400).json({
                error: {
                    message: 'INVALID_DATA',
                    code: 400
                }
            })
        }

        const { email, password } = request.body
        console.log(password)

        const existingUser = await User.findOne({ email })
        console.log(existingUser.password)

        if (!existingUser) {
            response.status(400).send({
                error: {
                    message: 'EMAIL_NOT_FOUND',
                    code: 400
                }
            })
            return
        }

        const isPasswordEqual = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordEqual) {
            response.status(400).send({
                error: {
                    message: 'INVALID_PASSWORD',
                    code: 400
                }
            })
            return
        }

        const tokens = tokenService.generate({ _id: existingUser._id })
        await tokenService.save(existingUser._id, tokens.refreshToken)

        response.status(200).send({ ...tokens, userId: existingUser._id })
    } catch (error) {
        response.status(500).json({ message: 'Server error. Can not signIn' })
    }
}

function isTokenInvalid(data, dbToken) {
    return !data || !dbToken || data._id !== dbToken?.user?.toString()
}

export async function postTokenHandler(request, response) {
    try {
        const { refresh_token: refreshToken } = request.body
        const data = tokenService.validateRefresh(refreshToken)
        const dbToken = await tokenService.findToken(refreshToken)

        if (isTokenInvalid(data, dbToken)) {
            return response.status(401).json({ message: 'Unauthorized' })
        }

        const tokens = tokenService.generate({
            _id: data._id
        })

        await tokenService.save(data._id, tokens.refreshToken)

        response.status(200).send({ ...tokens, userId: data._id })
    } catch (error) {
        response.status(500).json({ message: 'Server error. Can not authorized' })
    }
}
