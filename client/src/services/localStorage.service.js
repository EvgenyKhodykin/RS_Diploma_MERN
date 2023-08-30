const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
const USERID_KEY = 'user-local-id'
const CART_BOOKS_IDS = 'cart-books-ids'
// const FAVORITES_BOOKS_IDS = 'favorite-books-ids'

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

function getCartBooksIds() {
    return JSON.parse(localStorage.getItem(CART_BOOKS_IDS)) || []
}

function addCartBookId(id) {
    if (!getCartBooksIds()) {
        const bookIdsArray = []
        bookIdsArray.push(id)
        localStorage.setItem(CART_BOOKS_IDS, JSON.stringify(bookIdsArray))
    } else if (getCartBooksIds() && getCartBooksIds().length === 0) {
        const booksIdsArray = getCartBooksIds()
        removeAllCartBooksIds()
        booksIdsArray.push(id)
        localStorage.setItem(CART_BOOKS_IDS, JSON.stringify(booksIdsArray))
    } else {
        const booksIdsArray = getCartBooksIds()
        booksIdsArray.push(id)
        localStorage.setItem(CART_BOOKS_IDS, JSON.stringify(booksIdsArray))
    }
}

function removeCartBookId(id) {
    const booksIdsArray = getCartBooksIds()
    removeAllCartBooksIds()
    const newBooksIdsArray = booksIdsArray.filter(bookId => bookId !== id)
    localStorage.setItem(CART_BOOKS_IDS, JSON.stringify(newBooksIdsArray))
}

function removeAllCartBooksIds() {
    localStorage.removeItem(CART_BOOKS_IDS)
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserId,
    removeAuthData,
    addCartBookId,
    getCartBooksIds,
    removeCartBookId,
    removeAllCartBooksIds
}

export default localStorageService
