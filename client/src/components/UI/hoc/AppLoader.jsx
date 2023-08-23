import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBooksList } from '../../../redux/slices/books.slice.js'
import { loadCategoriesList } from '../../../redux/slices/categories.slice.js'
import {
    getIsLoggedIn,
    getUsersLoadingStatus
} from '../../../redux/selectors/users.selectors.js'
import { loadUsersList } from '../../../redux/slices/users.slice.js'
import Loading from '../Loading.jsx'

function AppLoader({ children }) {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn)
    const usersStatusLoading = useSelector(getUsersLoadingStatus)

    useEffect(() => {
        dispatch(loadBooksList)
        dispatch(loadCategoriesList)
        if (isLoggedIn) {
            dispatch(loadUsersList)
        }
    }, [isLoggedIn])

    if (usersStatusLoading) return <Loading />
    return children
}

export default AppLoader
