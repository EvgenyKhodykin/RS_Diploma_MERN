import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBooksList } from '../../redux/slices/books.slice.js'
import { loadCategoriesList } from '../../redux/slices/categories.slice.js'
import { getUsersLoadingStatus } from '../../redux/selectors/users.selectors.js'
import { loadUsersList } from '../../redux/slices/users.slice.js'
import Loading from '../UI/Loading.jsx'
import localStorageService from '../../services/localStorage.service.js'
import { loadCartBooksIds } from '../../redux/slices/cart.slice.js'

function AppLoader({ children }) {
    const dispatch = useDispatch()
    const usersStatusLoading = useSelector(getUsersLoadingStatus)

    useEffect(() => {
        dispatch(loadBooksList)
        dispatch(loadCategoriesList)
        dispatch(loadUsersList)
        if (localStorageService.getUserId) dispatch(loadCartBooksIds)
    }, [])

    if (usersStatusLoading) return <Loading />
    return children
}

export default AppLoader
