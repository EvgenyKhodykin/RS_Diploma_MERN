import Book from '../models/Book.js'

export async function getBooksHandler(request, response) {
    try {
        const list = await Book.find()
        response.status(200).send(list)
    } catch (error) {
        response.status(500).json({ message: 'Server error. Can not get books' })
    }
}
