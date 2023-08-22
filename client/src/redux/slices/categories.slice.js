import { createSlice } from '@reduxjs/toolkit'
import isOutdated from '../../utils/isOutdated.js'
import categoriesService from '../../services/categories.service.js'

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        categoriesRequested(state) {
            state.isLoading = true
        },
        categoriesRecieved(state, action) {
            state.entities = action.payload
            state.lastFetch = Date.now()
            state.isLoading = false
        },
        categoriesRequestFailed(state, action) {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { actions, reducer: categoriesReducer } = categoriesSlice
const { categoriesRequested, categoriesRecieved, categoriesRequestFailed } = actions

export const loadCategoriesList = async (dispatch, getState) => {
    const { lastFetch } = getState().categories
    if (isOutdated(lastFetch)) {
        dispatch(categoriesRequested())
        try {
            const { content } = await categoriesService.fetchAll()
            dispatch(categoriesRecieved(content))
        } catch (error) {
            dispatch(categoriesRequestFailed(error.message))
        }
    }
}

export default categoriesReducer
