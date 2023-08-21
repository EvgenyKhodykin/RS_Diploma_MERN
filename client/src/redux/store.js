import { combineReducers, configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/books.slice.js'
import categoriesReducer from './slices/categories.slice.js'

const rootReducer = combineReducers({
    books: booksReducer,
    categories: categoriesReducer
})

const store = configureStore({ reducer: rootReducer })

export default store
