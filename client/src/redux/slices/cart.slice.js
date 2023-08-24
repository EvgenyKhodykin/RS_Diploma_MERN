import { createSlice } from '@reduxjs/toolkit'
import localStorageService from '../../services/localStorage.service.js'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        entities: []
    },
    reducers: {
        bookIdAdded(state, action) {
            state.entities.push(action.payload)
        },
        bookIdRemoved(state, action) {
            state.entities = state.entities.filter(item => item !== action.payload)
        },
        allBookIdsRemoved(state) {
            state.entities = []
        }
    }
})

const { actions, reducer: cartReducer } = cartSlice
const { bookIdAdded, bookIdRemoved, allBookIdsRemoved } = actions

export const addBookId = payload => dispatch => {
    localStorageService.setBookId(payload)
    dispatch(bookIdAdded(payload))
}

export const removeBookId = payload => dispatch => {
    localStorageService.removeBookId(payload)
    dispatch(bookIdRemoved(payload))
}

export const removeAllIds = dispatch => {
    localStorageService.removeAllBooksIds()
    dispatch(allBookIdsRemoved())
}

export default cartReducer
