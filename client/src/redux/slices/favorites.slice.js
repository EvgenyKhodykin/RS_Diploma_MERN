import { createSlice } from '@reduxjs/toolkit'
import localStorageService from '../../services/localStorage.service.js'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: { booksIds: [] },
    reducers: {
        favoritesBooksIdsRecieved(state, action) {
            state.booksIds = action.payload
        },
        favoritesBookIdAdded(state, action) {
            state.booksIds.push(action.payload)
        },
        favoritesBookIdRemoved(state, action) {
            state.booksIds = state.booksIds.filter(item => item !== action.payload)
        },
        favoritesStoreCleared(state, action) {
            state.booksIds = action.payload
        }
    }
})

const { actions, reducer: favoritesReducer } = favoritesSlice
const {
    favoritesBooksIdsRecieved,
    favoritesBookIdAdded,
    favoritesBookIdRemoved,
    favoritesStoreCleared
} = actions

export const loadFavoritesBooksIds = key => dispatch => {
    const data = localStorageService.getBooksIds(key)
    dispatch(favoritesBooksIdsRecieved(data))
}

export const addFavoritesBookId = (key, payload) => dispatch => {
    localStorageService.addBookId(key, payload)
    dispatch(favoritesBookIdAdded(payload))
}

export const removeFavoritesBookId = (key, payload) => dispatch => {
    localStorageService.removeBookId(key, payload)
    dispatch(favoritesBookIdRemoved(payload))
}

export const clearFavoritesStore = key => dispatch => {
    localStorageService.removeAllBooksIds(key)
    dispatch(favoritesStoreCleared([]))
}

export default favoritesReducer
