import express from 'express'
import { getCategoriesHandler } from '../controllers/categories.controllers.js'

const categoriesRouter = express.Router({ mergeParams: true })

categoriesRouter.get('/', getCategoriesHandler)

export default categoriesRouter
