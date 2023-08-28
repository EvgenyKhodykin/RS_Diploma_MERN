import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/UI/Navbar.jsx'
import { Box } from '@mui/material'
import { getCurrentUser, getIsLoggedIn } from '../redux/selectors/users.selectors.js'
import { setUserFavorites } from '../redux/slices/favorites.slice.js'

function MainLayout() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn)
    const currentUser = isLoggedIn ? useSelector(getCurrentUser) : null

    useEffect(() => {
        if (isLoggedIn) dispatch(setUserFavorites(currentUser?.favorites))
    }, [])

    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Outlet />
            </Box>
        </>
    )
}

export default MainLayout
