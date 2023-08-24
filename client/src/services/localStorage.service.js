const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
const USERID_KEY = 'user-local-id'
const BOOK_IDS = 'book-ids'

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

function getBooksIds() {
    return localStorage.getItem(BOOK_IDS)
}

function setBookId(id) {
    if (!getBooksIds()) {
        const bookIdsArray = []
        bookIdsArray.push(id)
        localStorage.setItem(BOOK_IDS, JSON.stringify(bookIdsArray))
    } else if (getBooksIds() && getBooksIds().length === 0) {
        const booksIdsArray = JSON.parse(getBooksIds())
        removeAllBooksIds()
        booksIdsArray.push(id)
        localStorage.setItem(BOOK_IDS, JSON.stringify(booksIdsArray))
    } else {
        const booksIdsArray = JSON.parse(getBooksIds())
        booksIdsArray.push(id)
        localStorage.setItem(BOOK_IDS, JSON.stringify(booksIdsArray))
    }
}

function removeBookId(id) {
    const booksIdsArray = JSON.parse(getBooksIds())
    removeAllBooksIds()
    const newBooksIdsArray = booksIdsArray.filter(bookId => bookId !== id)
    localStorage.setItem(BOOK_IDS, JSON.stringify(newBooksIdsArray))
}

function removeAllBooksIds() {
    localStorage.removeItem(BOOK_IDS)
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserId,
    removeAuthData,
    setBookId,
    getBooksIds,
    removeBookId,
    removeAllBooksIds
}

export default localStorageService
