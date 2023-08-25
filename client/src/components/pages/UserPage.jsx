import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, CardMedia, Container, Paper, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { getCurrentUser } from '../../redux/selectors/users.selectors.js'

function UserPage() {
    const currentUser = useSelector(getCurrentUser)

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
                    alignItems: 'center'
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Button>
                        <SettingsIcon />
                    </Button>
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
                        // boxShadow: '2px 2px 5px 2px lightgrey'
                    }}
                />
                <Typography variant='subtitlte1'>Имя:</Typography>
                <Typography variant='h6'>{currentUser.name}</Typography>
                <Typography variant='subtitlte1' sx={{ mt: 4 }}>
                    Пол:
                </Typography>
                <Typography variant='h6'>{currentUser.sex}</Typography>
            </Paper>
        </Container>
    )
}

export default UserPage
