import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MainPage from './components/pages/MainPage'
import CartLayout from './layouts/CartLayout'
import LoginLayout from './layouts/LoginLayout'
import BookPage from './components/pages/BookPage.jsx'
import AppLoader from './components/UI/hoc/AppLoader.jsx'

function App() {
    return (
        <>
            <AppLoader>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<MainPage />} />
                        <Route path='books/:bookId' element={<BookPage />} />
                        <Route path='cart' element={<CartLayout />} />
                        <Route path='login' element={<LoginLayout />} />
                    </Route>
                </Routes>
            </AppLoader>
        </>
    )
}

export default App
