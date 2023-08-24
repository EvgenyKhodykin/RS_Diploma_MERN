import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Button, CardMedia, Paper } from '@mui/material'
import localStorageService from '../../services/localStorage.service.js'

function BookCart({ _id, cover, name }) {
    const handleDeleteClick = id => {
        const storageBooksIds = JSON.parse(localStorageService.getBookIds())
        localStorageService.removeBookIds()
        const newStorageBooksIds = storageBooksIds.filter(bookId => bookId !== id)
        localStorageService.setBookId(JSON.stringify(newStorageBooksIds))
    }

    return (
        <Paper elevation={5} sx={{ mx: 1, p: 1, width: 250, height: 380 }}>
            <CardMedia
                image={cover}
                component='img'
                alt={name}
                title={name}
                sx={{ height: 300, objectFit: 'contain' }}
            />
            <Box
                sx={{
                    display: 'flex',
                    mt: 3,
                    width: '100%',
                    justifyContent: 'center'
                }}
            >
                <Button onClick={() => handleDeleteClick(_id)}>
                    <DeleteIcon color='primary' />
                </Button>
            </Box>
        </Paper>
    )
}

export default BookCart
