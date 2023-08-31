import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBooksList } from '../../redux/slices/books.slice.js'
import { loadCategoriesList } from '../../redux/slices/categories.slice.js'
import { getUsersLoadingStatus } from '../../redux/selectors/users.selectors.js'
import { loadUsersList } from '../../redux/slices/users.slice.js'
import Loading from '../UI/Loading.jsx'
import { loadCartBooksIds } from '../../redux/slices/cart.slice.js'
import { loadFavoritesBooksIds } from '../../redux/slices/favorites.slice.js'

function AppLoader({ children }) {
    const dispatch = useDispatch()
    const usersStatusLoading = useSelector(getUsersLoadingStatus)

    useEffect(() => {
        dispatch(loadBooksList)
        dispatch(loadCategoriesList)
        dispatch(loadUsersList)
        dispatch(loadCartBooksIds('cart-books-ids'))
        dispatch(loadFavoritesBooksIds('favorites-books-ids'))
    }, [])

    if (usersStatusLoading) return <Loading />
    return children
}

export default AppLoader
