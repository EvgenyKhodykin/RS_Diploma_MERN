export const getBooks = state => state.books.entities
export const getBooksLoadingStatus = state => state.books.isLoading
export const getBookById = bookId => state => {
    if (state.books.entities) {
        return state.books.entities.find(book => book._id === bookId)
    }
}
