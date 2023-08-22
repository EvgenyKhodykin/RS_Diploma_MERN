import React from 'react'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <Container maxWidth='sm' sx={{ mt: 8 }}>
            <Outlet />
        </Container>
    )
}

export default AuthLayout
