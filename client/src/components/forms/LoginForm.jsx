import React, { useState } from 'react'
import {
    Box,
    Button,
    InputAdornment,
    Paper,
    TextField,
    Tooltip,
    Typography
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Link } from 'react-router-dom'

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }

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
                />
                <TextField
                    required
                    label='Пароль'
                    type={showPassword ? 'text' : 'password'}
                    autoComplete='password'
                    sx={{ width: '100%', my: 1 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <Tooltip title='Показать/скрыть пароль'>
                                    <Button onClick={toggleShowPassword}>
                                        {showPassword ? (
                                            <VisibilityIcon />
                                        ) : (
                                            <VisibilityOffIcon />
                                        )}
                                    </Button>
                                </Tooltip>
                            </InputAdornment>
                        )
                    }}
                />
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
