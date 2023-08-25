import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Button, CardMedia, Paper, Tooltip } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeBookId } from '../../redux/slices/cart.slice.js'

function BookCart({ _id, cover, name }) {
    const dispatch = useDispatch()

    const handleDeleteClick = id => {
        dispatch(removeBookId(id))
    }

    return (
        <Paper elevation={5} sx={{ m: 1, p: 1, width: 250, height: 380 }}>
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
                <Tooltip title='Удалить из корзины'>
                    <Button onClick={() => handleDeleteClick(_id)}>
                        <DeleteIcon color='primary' />
                    </Button>
                </Tooltip>
            </Box>
        </Paper>
    )
}

export default BookCart
