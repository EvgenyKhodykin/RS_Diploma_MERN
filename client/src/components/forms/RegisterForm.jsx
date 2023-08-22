import React from 'react'
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Paper,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material'
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
                <TextField
                    required
                    label='Имя'
                    type='name'
                    autoComplete='current-name'
                    sx={{ width: '100%', my: 1 }}
                ></TextField>
                <FormControl sx={{ ml: 1 }}>
                    <FormLabel id='demo-radio-buttons-group-label'>Пол</FormLabel>
                    <RadioGroup
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue='male'
                        name='radio-buttons-group'
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
