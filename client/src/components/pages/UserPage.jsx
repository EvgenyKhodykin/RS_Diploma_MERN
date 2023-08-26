import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Box,
    Button,
    CardMedia,
    Container,
    Paper,
    Tooltip,
    Typography
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { getCurrentUserId, getUsersList } from '../../redux/selectors/users.selectors.js'

function UserPage() {
    const usersList = useSelector(getUsersList)
    const currentUserId = useSelector(getCurrentUserId)
    const currentUser = usersList?.filter(user => user._id === currentUserId)[0]

    return (
        <Container
            maxWidth='sm'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 4
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: 1
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Tooltip title='Редактировать профиль'>
                        <Link to={`/user/${currentUser._id}/edit`}>
                            <Button>
                                <SettingsIcon />
                            </Button>
                        </Link>
                    </Tooltip>
                </Box>
                <CardMedia
                    image={currentUser.image}
                    component='img'
                    alt={currentUser.name}
                    title={currentUser.name}
                    sx={{
                        height: 250,
                        width: 250,
                        objectFit: 'contain',
                        mb: 4,
                        borderRadius: '50%'
                    }}
                />
                <Typography variant='subtitlte1' color='primary'>
                    Имя:
                </Typography>
                <Typography variant='h6'>{currentUser.name}</Typography>
                <Typography variant='subtitlte1' sx={{ mt: 3 }} color='primary'>
                    Пол:
                </Typography>
                <Typography variant='h6'>{currentUser.sex}</Typography>
            </Paper>
        </Container>
    )
}

export default UserPage
