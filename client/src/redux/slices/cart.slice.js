import { createSlice } from '@reduxjs/toolkit'
import localStorageService from '../../services/localStorage.service.js'

const cartSlice = createSlice({
    name: 'cart',
    initialState: { booksIds: [] },
    reducers: {
        cartBooksIdsRecieved(state, action) {
            state.booksIds = action.payload
        },
        cartBookIdAdded(state, action) {
            state.booksIds.push(action.payload)
        },
        cartBookIdRemoved(state, action) {
            state.booksIds = state.booksIds.filter(item => item !== action.payload)
        },
        cartStoreCleared(state, action) {
            state.booksIds = action.payload
        }
    }
})

const { actions, reducer: cartReducer } = cartSlice
const { cartBooksIdsRecieved, cartBookIdAdded, cartBookIdRemoved, cartStoreCleared } =
    actions

export const loadCartBooksIds = key => dispatch => {
    const data = localStorageService.getBooksIds(key)
    dispatch(cartBooksIdsRecieved(data))
}

export const addCartBookId = (key, payload) => dispatch => {
    localStorageService.addBookId(key, payload)
    dispatch(cartBookIdAdded(payload))
}

export const removeCartBookId = (key, payload) => dispatch => {
    localStorageService.removeBookId(key, payload)
    dispatch(cartBookIdRemoved(payload))
}

export const clearCartStore = key => dispatch => {
    localStorageService.removeAllBooksIds(key)
    dispatch(cartStoreCleared([]))
}

export default cartReducer
