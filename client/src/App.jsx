import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MainPage from './components/pages/MainPage'
import AuthLayout from './layouts/LoginLayout'
import AppLoader from './components/hoc/AppLoader.jsx'
import LoginForm from './components/forms/LoginForm.jsx'
import RegisterForm from './components/forms/RegisterForm.jsx'
import LogOut from './layouts/LogOut.jsx'
import CartPage from './components/pages/CartPage.jsx'
import BookPage from './components/books/BookPage.jsx'
import ProtectedRoutes from './components/UI/ProtectedRoutes.jsx'
import FavoritesPage from './components/pages/FavoritesPage.jsx'
import UserPage from './components/pages/UserPage.jsx'
import ProfileEditPage from './components/pages/ProfileEditPage.jsx'

function App() {
    return (
        <>
            <AppLoader>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<MainPage />} />
                        <Route path='books/:bookId' element={<BookPage />} />
                        <Route path='auth' element={<AuthLayout />}>
                            <Route path='signIn' element={<LoginForm />} />
                            <Route path='signUp' element={<RegisterForm />} />
                        </Route>
                        <Route element={<ProtectedRoutes />}>
                            <Route path='favorites' element={<FavoritesPage />} />
                            <Route path='user' element={<UserPage />}>
                                <Route path='edit' element={<ProfileEditPage />} />
                            </Route>
                        </Route>
                        <Route path='logout' element={<LogOut />} />
                        <Route path='cart' element={<CartPage />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Route>
                </Routes>
            </AppLoader>
        </>
    )
}

export default App
