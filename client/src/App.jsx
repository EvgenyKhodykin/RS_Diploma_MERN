import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MainPage from './components/pages/MainPage'
import CartLayout from './layouts/CartLayout'
import AuthLayout from './layouts/LoginLayout'
import BookPage from './components/pages/BookPage.jsx'
import AppLoader from './components/UI/hoc/AppLoader.jsx'
import LoginForm from './components/forms/LoginForm.jsx'
import RegisterForm from './components/forms/RegisterForm.jsx'

function App() {
    return (
        <>
            <AppLoader>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<MainPage />} />
                        <Route path='books/:bookId' element={<BookPage />} />
                        <Route path='cart' element={<CartLayout />} />
                        <Route path='auth' element={<AuthLayout />}>
                            <Route path='signIn' element={<LoginForm />} />
                            <Route path='signUp' element={<RegisterForm />} />
                        </Route>
                    </Route>
                </Routes>
            </AppLoader>
        </>
    )
}

export default App
