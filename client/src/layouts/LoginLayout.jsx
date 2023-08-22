import React from 'react'
import { Container } from '@mui/material'
import LoginForm from '../components/forms/LoginForm.jsx'

function LoginLayout() {
    return (
        <Container maxWidth='sm' sx={{ mt: 8 }}>
            <LoginForm />
        </Container>
    )
}

export default LoginLayout
