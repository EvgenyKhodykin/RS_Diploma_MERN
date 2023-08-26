import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'

function ProtectedRoutes() {
    const isLoggedIn = useSelector(getIsLoggedIn)

    if (isLoggedIn) return <Outlet />
    return <Navigate to='auth/signIn' />
}

export default ProtectedRoutes
