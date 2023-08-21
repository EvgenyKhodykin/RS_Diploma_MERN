import { createSlice } from '@reduxjs/toolkit'
import isOutdated from '../../utils/isOutdated.js'
import booksService from '../../services/books.service.js'

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        booksRequested(state) {
            state.isLoading = true
        },
        booksRecieved(state, action) {
            state.entities = action.payload
            state.lastFetch = Date.now()
            state.isLoading = false
        },
        booksRequestFailed(state, action) {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { actions, reducer: booksReducer } = booksSlice
const { booksRequested, booksRecieved, booksRequestFailed } = actions

export const loadBooksList = async (dispatch, getState) => {
    const { lastFetch } = getState().books
    if (isOutdated(lastFetch)) {
        dispatch(booksRequested())
        try {
            const { content } = await booksService.fetchAll()
            dispatch(booksRecieved(content))
        } catch (error) {
            dispatch(booksRequestFailed(error.message))
        }
    }
}

export default booksReducer
