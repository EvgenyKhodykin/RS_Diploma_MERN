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
import UserEditPage from './components/pages/UserEditPage.jsx'
import CategoryPage from './components/pages/CategoryPage.jsx'

function App() {
    return (
        <>
            <AppLoader>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<MainPage />} />
                        <Route
                            path='books/categories/:categoryId'
                            element={<CategoryPage />}
                        />
                        <Route path='books/:bookId' element={<BookPage />} />
                        <Route path='auth' element={<AuthLayout />}>
                            <Route path='signIn' element={<LoginForm />} />
                            <Route path='signUp' element={<RegisterForm />} />
                        </Route>
                        <Route path='cart' element={<CartPage />} />
                        <Route path='favorites' element={<FavoritesPage />} />
                        <Route element={<ProtectedRoutes />}>
                            <Route path='user/:userId' element={<UserPage />} />
                            <Route path='user/:userId/edit' element={<UserEditPage />} />
                        </Route>
                        <Route path='logout' element={<LogOut />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Route>
                </Routes>
            </AppLoader>
        </>
    )
}

export default App
