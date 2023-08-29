import React, { useState } from 'react'
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
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../../redux/selectors/users.selectors.js'
import { updateCurrentUser } from '../../redux/slices/users.slice.js'

function UserEditPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentUser = useSelector(getCurrentUser)
    const [user, setUser] = useState(currentUser)

    const handleChange = ({ target }) => {
        setUser(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const handleSubmit = async event => {
        event.preventDefault()
        dispatch(updateCurrentUser(user))
        navigate(`/user/${currentUser._id}`, { replace: true })
    }

    if (currentUser) {
        return (
            <Paper elevation={5} sx={{ py: 1, px: 2, mt: 8, width: '30%' }}>
                <Typography variant='h5' sx={{ m: 1 }}>
                    Редактирование персональных данных:
                </Typography>
                <Box component='form' onSubmit={handleSubmit}>
                    <TextField
                        required
                        type='text'
                        name='name'
                        value={user.name}
                        autoComplete='current-name'
                        sx={{ width: '100%', my: 1 }}
                        onChange={handleChange}
                    />
                    <FormControl sx={{ ml: 1 }}>
                        <FormLabel id='demo-radio-buttons-group-label'>Пол</FormLabel>
                        <RadioGroup
                            aria-labelledby='demo-radio-buttons-group-label'
                            value={user.sex}
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
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            my: 2
                        }}
                    >
                        <Link to={`/user/${currentUser._id}`}>
                            <Button variant='contained'>Назад</Button>
                        </Link>
                        <Button variant='contained' type='submit'>
                            Подтвердить
                        </Button>
                    </Box>
                </Box>
            </Paper>
        )
    }
}

export default UserEditPage
