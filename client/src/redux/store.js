import { combineReducers, configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/books.slice.js'
import categoriesReducer from './slices/categories.slice.js'
import selectCategoryReducer from './slices/selectCategory.slice.js'
import usersReducer from './slices/users.slice.js'

const rootReducer = combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
    users: usersReducer,
    selectCategory: selectCategoryReducer
})

const store = configureStore({ reducer: rootReducer })

export default store
