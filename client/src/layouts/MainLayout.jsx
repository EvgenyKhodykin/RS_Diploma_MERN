import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/UI/Navbar.jsx'

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout
