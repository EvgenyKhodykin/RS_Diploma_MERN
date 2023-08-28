import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/UI/Navbar.jsx'
import { Box } from '@mui/material'

function MainLayout() {
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
