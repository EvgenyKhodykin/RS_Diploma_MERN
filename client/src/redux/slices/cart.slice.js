import { createSlice } from '@reduxjs/toolkit'
import localStorageService from '../../services/localStorage.service.js'

const cartSlice = createSlice({
    name: 'cart',
    initialState: { booksIds: [], fullBooksIds: [] },
    reducers: {
        cartBooksIdsRecieved(state, action) {
            state.booksIds = action.payload
            state.fullBooksIds = action.payload
        },
        cartBookIdAdded(state, action) {
            if (!state.booksIds.includes(action.payload)) {
                state.booksIds.push(action.payload)
            }
            state.fullBooksIds.push(action.payload)
        },
        cartBookIdRemoved(state, action) {
            state.booksIds = state.booksIds.filter(item => item !== action.payload)
            state.fullBooksIds = state.fullBooksIds.filter(
                item => item !== action.payload
            )
        },
        cartOneBookIdRemoved(state, action) {
            const idIndex = state.fullBooksIds.indexOf(action.payload)
            if (idIndex >= 0) {
                state.fullBooksIds.splice(idIndex, 1)
            }
        },
        cartStoreCleared(state, action) {
            state.booksIds = action.payload
        }
    }
})

const { actions, reducer: cartReducer } = cartSlice
const {
    cartBooksIdsRecieved,
    cartBookIdAdded,
    cartBookIdRemoved,
    cartStoreCleared,
    cartOneBookIdRemoved
} = actions

export const loadCartBooksIds = key => dispatch => {
    const data = localStorageService.getBooksIds(key)
    dispatch(cartBooksIdsRecieved(data))
}

export const addCartBookId = (key, payload) => dispatch => {
    localStorageService.addBookId(key, payload)
    dispatch(cartBookIdAdded(payload))
}

export const removeCartOneBookId = (key, payload) => dispatch => {
    localStorageService.removeOneBookId(key, payload)
    dispatch(cartOneBookIdRemoved(payload))
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
