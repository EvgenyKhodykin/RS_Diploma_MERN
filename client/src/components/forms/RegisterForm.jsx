import React from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function RegisterForm() {
    return (
        <Paper elevation={5} sx={{ p: 1 }}>
            <Typography variant='h4' sx={{ m: 1 }}>
                Регистрация:
            </Typography>
            <Box component='form'>
                <TextField
                    required
                    label='Электронная почта'
                    type='email'
                    autoComplete='email'
                    sx={{ width: '100%', my: 1 }}
                ></TextField>
                <TextField
                    required
                    label='Пароль'
                    type='password'
                    autoComplete='current-password'
                    sx={{ width: '100%', my: 1 }}
                ></TextField>
                <Button variant='contained' size='large' sx={{ width: '100%', my: 2 }}>
                    Зарегистрироваться
                </Button>
                <Typography sx={{ mt: 2 }}>
                    Уже есть учётная запись?{' '}
                    <Link style={{ textDecoration: 'none', color: 'red' }}>Войти</Link>
                </Typography>
            </Box>
        </Paper>
    )
}

export default RegisterForm
