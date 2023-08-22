import React from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function LoginForm() {
    return (
        <Paper elevation={5} sx={{ p: 1 }}>
            <Typography variant='h4' sx={{ m: 1 }}>
                Вход:
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
                    autoComplete='password'
                    sx={{ width: '100%', my: 1 }}
                ></TextField>
                <Button variant='contained' size='large' sx={{ width: '100%', my: 2 }}>
                    Войти
                </Button>
                <Typography sx={{ mt: 2 }}>
                    Нет учётной записи?{' '}
                    <Link
                        to='/auth/signUp'
                        style={{ textDecoration: 'none', color: 'red' }}
                    >
                        Зарегистрироваться
                    </Link>
                </Typography>
            </Box>
        </Paper>
    )
}

export default LoginForm
