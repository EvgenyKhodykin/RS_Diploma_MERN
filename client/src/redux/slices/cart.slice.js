import { createSlice } from '@reduxjs/toolkit'
import localStorageService from '../../services/localStorage.service.js'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        entities: []
    },
    reducers: {
        cartBooksIdsRecieved(state, action) {
            state.entities = action.payload
        },
        cartBookIdAdded(state, action) {
            state.entities.push(action.payload)
        },
        cartBookIdRemoved(state, action) {
            state.entities = state.entities.filter(item => item !== action.payload)
        },
        cartStoreCleared(state) {
            state.entities = null
        }
    }
})

const { actions, reducer: cartReducer } = cartSlice
const { cartBooksIdsRecieved, cartBookIdAdded, cartBookIdRemoved, cartStoreCleared } =
    actions

export const loadCartBooksIds = dispatch => {
    const data = localStorageService.getCartBooksIds()
    dispatch(cartBooksIdsRecieved(data))
}

export const addCartBookId = payload => dispatch => {
    localStorageService.addCartBookId(payload)
    dispatch(cartBookIdAdded(payload))
}

export const removeCartBookId = payload => dispatch => {
    localStorageService.removeCartBookId(payload)
    dispatch(cartBookIdRemoved(payload))
}

export const clearCartStore = dispatch => {
    localStorageService.removeAllCartBooksIds()
    dispatch(cartStoreCleared)
}

export default cartReducer
