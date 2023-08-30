import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userLogOut } from '../redux/slices/users.slice.js'
import localStorageService from '../services/localStorage.service.js'

function LogOut() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userLogOut)
        localStorageService.removeAllCartBooksIds()
    }, [])

    return <Navigate to='/' />
}

export default LogOut
