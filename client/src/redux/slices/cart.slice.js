import { createSlice } from '@reduxjs/toolkit'

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
            state.entities = state.entities.filter(item => item._id !== action.payload)
        }
    }
})

const { actions, reducer: cartReducer } = cartSlice
const { bookIdAdded, bookIdRemoved } = actions

export const addBookId = payload => dispatch => {
    dispatch(bookIdAdded(payload))
}

export const removeBookId = payload => dispatch => {
    dispatch(bookIdRemoved(payload))
}

export default cartReducer
