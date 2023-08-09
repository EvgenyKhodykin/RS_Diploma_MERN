import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../UI/Navbar'

function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
