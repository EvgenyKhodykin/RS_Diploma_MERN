import React from 'react'
import { Container } from '@mui/material'
import LoginForm from '../components/forms/LoginForm.jsx'

function LoginLayout() {
    return (
        <Container maxWidth='sm' sx={{ mt: 5 }}>
            <LoginForm />
        </Container>
    )
}

export default LoginLayout
