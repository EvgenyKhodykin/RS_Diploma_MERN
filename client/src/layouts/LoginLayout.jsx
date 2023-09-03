import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function AuthLayout() {
    return (
        <Container maxWidth='sm' sx={{ mt: 8 }}>
            <Outlet />
        </Container>
    )
}

export default AuthLayout
