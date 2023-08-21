import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MainPage from './components/pages/MainPage'
import CartLayout from './layouts/CartLayout'
import LoginLayout from './layouts/LoginLayout'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path='cart' element={<CartLayout />} />
                    <Route path='login' element={<LoginLayout />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
