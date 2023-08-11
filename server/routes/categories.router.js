import express from 'express'
import Category from '../models/Category.js'

const categoriesRouter = express.Router({ mergeParams: true })

categoriesRouter.get('/', async (request, response) => {
    try {
        const list = await Category.find()
        response.status(200).send(list)
    } catch (error) {
        response.status(500).json({ message: 'Server error. Try again later' })
    }
})

export default categoriesRouter
