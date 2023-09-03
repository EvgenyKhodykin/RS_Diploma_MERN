import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { Link, useNavigate } from 'react-router-dom'
import { loadUsersList, signIn } from '../../redux/slices/users.slice.js'
import { getAuthError, getIsLoggedIn } from '../../redux/selectors/users.selectors.js'

function LoginForm() {
    const [data, setData] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn)
    const loginError = useSelector(getAuthError)
    const navigate = useNavigate()
    document.title = 'Вход'

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadUsersList)
            navigate('/', { replace: true })
        }
    }, [isLoggedIn])

    const handleChange = event => {
        const { target } = event
        setData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(signIn(data))
    }

    return (
        <Paper elevation={5} sx={{ p: 1 }}>
            <Typography variant='h4' sx={{ m: 1 }}>
                Вход:
            </Typography>
            <Box component='form' onSubmit={handleSubmit}>
                <TextField
                    required
                    label='Электронная почта'
                    name='email'
                    type='email'
                    sx={{ width: '100%', my: 1 }}
                    onChange={handleChange}
                />
                <TextField
                    required
                    label='Пароль'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    sx={{ width: '100%', my: 1 }}
                    onChange={handleChange}
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
                {loginError && (
                    <Typography sx={{ color: 'red', mt: 1 }}>{loginError}</Typography>
                )}
                <Button
                    variant='contained'
                    size='large'
                    sx={{ width: '100%', my: 2 }}
                    type='submit'
                >
                    Войти
                </Button>
                <Typography sx={{ mt: 2 }}>
                    Нет учётной записи?{' '}
                    <Link to='/auth/signUp' style={{ color: 'red' }}>
                        Зарегистрироваться
                    </Link>
                </Typography>
            </Box>
        </Paper>
    )
}

export default LoginForm
