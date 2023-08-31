import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userLogOut } from '../redux/slices/users.slice.js'
import { clearCartStore } from '../redux/slices/cart.slice.js'
import { clearFavoritesStore } from '../redux/slices/favorites.slice.js'

function LogOut() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userLogOut)
        dispatch(clearCartStore('cart-books-ids'))
        dispatch(clearFavoritesStore('favorites-books-ids'))
    }, [])

    return <Navigate to='/' />
}

export default LogOut
