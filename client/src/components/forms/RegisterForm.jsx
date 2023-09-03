/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputAdornment,
    Paper,
    Radio,
    RadioGroup,
    TextField,
    Tooltip,
    Typography
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { getAuthError, getIsLoggedIn } from '../../redux/selectors/users.selectors.js'
import { loadUsersList, signUp } from '../../redux/slices/users.slice.js'

function RegisterForm() {
    const [data, setData] = useState({
        email: '',
        password: '',
        sex: 'Мужской',
        name: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const isLoggedIn = useSelector(getIsLoggedIn)
    const loginError = useSelector(getAuthError)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onChange' })
    document.title = 'Регистрация'

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadUsersList)
            navigate('/', { replace: true })
        }
    }, [isLoggedIn])

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }

    const handleChange = event => {
        const { target } = event
        setData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const submitFormHandler = () => {
        if (!Object.keys(errors).length) {
            dispatch(signUp(data))
        }
    }

    return (
        <Paper elevation={5} sx={{ p: 1 }}>
            <Typography variant='h4' sx={{ m: 1 }}>
                Регистрация:
            </Typography>
            <Box component='form' onSubmit={handleSubmit(submitFormHandler)}>
                <TextField
                    {...register('email', {
                        pattern: {
                            message: 'Некорректный адрес электронной почты',
                            value: /^\S+@\S+\.\S+$/g
                        }
                    })}
                    error={errors?.email ? true : false}
                    helperText={errors?.email && errors.email.message}
                    required
                    label='Электронная почта'
                    sx={{ width: '100%', my: 1 }}
                    onChange={handleChange}
                />
                <TextField
                    {...register('password', {
                        minLength: {
                            message: 'Длина пароля должна быть не менее 8 символов',
                            value: 8
                        },
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
                            message:
                                'Пароль должен содержать хотя бы одну строчную, прописную буквы и цифру'
                        }
                    })}
                    error={errors?.password ? true : false}
                    helperText={errors?.password && errors.password.message}
                    required
                    label='Пароль'
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
                <TextField
                    {...register('name', {
                        minLength: {
                            value: 3,
                            message: 'Имя должно быть не менее 3-х символов'
                        }
                    })}
                    error={errors?.name ? true : false}
                    helperText={errors?.name && errors.name.message}
                    required
                    label='Имя'
                    sx={{ width: '100%', my: 1 }}
                    onChange={handleChange}
                />
                <FormControl sx={{ ml: 1 }}>
                    <FormLabel id='demo-radio-buttons-group-label'>Пол</FormLabel>
                    <RadioGroup
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue='Мужской'
                        name='sex'
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value='Мужской'
                            control={<Radio />}
                            label='Мужской'
                        />
                        <FormControlLabel
                            value='Женский'
                            control={<Radio />}
                            label='Женский'
                        />
                    </RadioGroup>
                </FormControl>
                {loginError && (
                    <Typography sx={{ color: 'red', mt: 1 }}>{loginError}</Typography>
                )}
                <Button
                    variant='contained'
                    size='large'
                    sx={{ width: '100%', my: 2 }}
                    type='submit'
                >
                    Зарегистрироваться
                </Button>
                <Typography sx={{ mt: 2 }}>
                    Уже есть учётная запись?{' '}
                    <Link
                        to='/auth/signIn'
                        style={{ textDecoration: 'none', color: 'red' }}
                    >
                        Войти
                    </Link>
                </Typography>
            </Box>
        </Paper>
    )
}

export default RegisterForm
