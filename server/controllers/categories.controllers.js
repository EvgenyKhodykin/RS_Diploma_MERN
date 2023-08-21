import Category from '../models/Category.js'

export async function getCategoriesHandler(request, response) {
    try {
        const list = await Category.find()
        response.status(200).send(list)
    } catch (error) {
        response.status(500).json({ message: 'Server error. Can not get comments' })
    }
}
