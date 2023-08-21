import jwt from 'jsonwebtoken'
import 'dotenv/config'
import Token from '../models/Token.js'

class TokenService {
    generate(payload) {
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
            expiresIn: '1h'
        })

        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY)

        return { accessToken, refreshToken, expiresIn: 3600 }
    }

    async save(user, refreshToken) {
        const data = await Token.findOne({ user })
        if (data) {
            data.refreshToken = refreshToken
            return data.save()
        }
        const token = await Token.create({ user, refreshToken })
        return token
    }

    validateRefresh(refreshToken) {
        try {
            return jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY)
        } catch (error) {
            return null
        }
    }

    validateAccess(accessToken) {
        try {
            return jwt.verify(accessToken, process.env.ACCESS_SECRET_KEY)
        } catch (error) {
            return null
        }
    }

    async findToken(refreshToken) {
        try {
            return await Token.findOne({ refreshToken })
        } catch (error) {
            return null
        }
    }
}

export default new TokenService()
