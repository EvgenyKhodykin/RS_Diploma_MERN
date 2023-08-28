import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        entities: [],
        isLoading: false
    },
    reducers: {
        userFavoritesRequested(state) {
            state.isLoading = true
        },
        userFavoritesRecieved(state, action) {
            state.entities = action.payload
        },
        bookIdAdded(state, action) {
            state.entities.push(action.payload)
        },
        bookIdRemoved(state, action) {
            state.entities = state.entities.filter(item => item !== action.payload)
        },
        allFavoritesRemoved(state) {
            state.entities = []
        }
    }
})

const { actions, reducer: favoritesReducer } = favoritesSlice
const {
    userFavoritesRequested,
    userFavoritesRecieved,
    bookIdAdded,
    bookIdRemoved,
    allFavoritesRemoved
} = actions

export const setUserFavorites = payload => dispatch => {
    dispatch(userFavoritesRequested())
    dispatch(userFavoritesRecieved(payload))
}

export const addFavoriteBookId = payload => dispatch => {
    dispatch(bookIdAdded(payload))
}

export const removeFavoriteBookId = payload => dispatch => {
    dispatch(bookIdRemoved(payload))
}

export const removeAllFavorites = dispatch => {
    dispatch(allFavoritesRemoved())
}

export default favoritesReducer
