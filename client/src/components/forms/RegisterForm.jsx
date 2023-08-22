import React, { useState } from 'react'
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
import { Link } from 'react-router-dom'

function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }

    const handleClick = event => {}

    return (
        <Paper elevation={5} sx={{ p: 1 }}>
            <Typography variant='h4' sx={{ m: 1 }}>
                Регистрация:
            </Typography>
            <Box component='form'>
                <TextField
                    required
                    label='Электронная почта'
                    type='text'
                    name='email'
                    autoComplete='email'
                    sx={{ width: '100%', my: 1 }}
                />
                <TextField
                    required
                    label='Пароль'
                    type={showPassword ? 'text' : 'password'}
                    name='password'
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
                <TextField
                    required
                    label='Имя'
                    type='text'
                    name='name'
                    autoComplete='current-name'
                    sx={{ width: '100%', my: 1 }}
                />
                <FormControl sx={{ ml: 1 }}>
                    <FormLabel id='demo-radio-buttons-group-label'>Пол</FormLabel>
                    <RadioGroup
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue='male'
                        name='sex'
                        onClick={handleClick}
                    >
                        <FormControlLabel
                            value='male'
                            control={<Radio />}
                            label='Мужской'
                        />
                        <FormControlLabel
                            value='female'
                            control={<Radio />}
                            label='Женский'
                        />
                    </RadioGroup>
                </FormControl>
                <Button variant='contained' size='large' sx={{ width: '100%', my: 2 }}>
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
