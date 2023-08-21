import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    users: '',
    books: '',
    comments: '',
    categories: ''
})

const store = configureStore({ reducer: rootReducer })

export default store
