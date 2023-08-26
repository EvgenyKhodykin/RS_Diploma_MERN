import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userLogOut } from '../redux/slices/users.slice.js'

function LogOut() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userLogOut)
    }, [])

    return <Navigate to='/' />
}

export default LogOut
