const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
const USERID_KEY = 'user-local-id'
// const CART_BOOKS_IDS = 'cart-books-ids'
// const FAVORITES_BOOKS_IDS = 'favorites-books-ids'

const setTokens = ({ refreshToken, accessToken, userId, expiresIn = 3600 }) => {
    const expiresDate = new Date().getTime() + expiresIn * 1000
    localStorage.setItem(USERID_KEY, userId)
    localStorage.setItem(TOKEN_KEY, accessToken)
    localStorage.setItem(REFRESH_KEY, refreshToken)
    localStorage.setItem(EXPIRES_KEY, expiresDate)
}

const getAccessToken = () => {
    return localStorage.getItem(TOKEN_KEY)
}
const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_KEY)
}
const getTokenExpiresDate = () => {
    return localStorage.getItem(EXPIRES_KEY)
}
const getUserId = () => {
    return localStorage.getItem(USERID_KEY)
}
const removeAuthData = () => {
    localStorage.removeItem(USERID_KEY)
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(REFRESH_KEY)
    localStorage.removeItem(EXPIRES_KEY)
}

function getBooksIds(key) {
    return JSON.parse(localStorage.getItem(key)) || []
}
function addBookId(key, id) {
    if (!getBooksIds(key)) {
        const bookIdsArray = []
        bookIdsArray.push(id)
        localStorage.setItem(key, JSON.stringify(bookIdsArray))
    } else if (getBooksIds(key) && getBooksIds(key).length === 0) {
        const booksIdsArray = getBooksIds(key)
        removeAllBooksIds(key)
        booksIdsArray.push(id)
        localStorage.setItem(key, JSON.stringify(booksIdsArray))
    } else {
        const booksIdsArray = getBooksIds(key)
        booksIdsArray.push(id)
        localStorage.setItem(key, JSON.stringify(booksIdsArray))
    }
}
function removeBookId(key, id) {
    const booksIdsArray = getBooksIds(key)
    removeAllBooksIds(key)
    const newBooksIdsArray = booksIdsArray.filter(bookId => bookId !== id)
    localStorage.setItem(key, JSON.stringify(newBooksIdsArray))
}
function removeAllBooksIds(key) {
    localStorage.removeItem(key)
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserId,
    removeAuthData,
    addBookId,
    getBooksIds,
    removeBookId,
    removeAllBooksIds
}

export default localStorageService
