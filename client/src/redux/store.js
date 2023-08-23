import { combineReducers, configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/books.slice.js'
import categoriesReducer from './slices/categories.slice.js'
import selectedCategoryReducer from './slices/selectedCategory.slice.js'
import usersReducer from './slices/users.slice.js'
import cartReducer from './slices/cart.slice.js'

const rootReducer = combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
    users: usersReducer,
    selectedCategory: selectedCategoryReducer,
    cart: cartReducer
})

const store = configureStore({ reducer: rootReducer })

export default store
