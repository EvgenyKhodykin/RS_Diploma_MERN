import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Button, CardMedia, Container, Paper } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeBookId } from '../../redux/slices/cart.slice.js'

function BookCart({ _id, cover, name }) {
    const dispatch = useDispatch()

    const handleDeleteClick = id => {
        dispatch(removeBookId(id))
    }
    return (
        <Container maxWidth='xs' sx={{ my: 4 }}>
            <Paper elevation={5} sx={{ p: 2 }}>
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
                        mt: 4,
                        width: '100%',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button>Оформить заказ</Button>
                    <Button onClick={() => handleDeleteClick(_id)}>
                        <DeleteIcon color='primary' />
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default BookCart
