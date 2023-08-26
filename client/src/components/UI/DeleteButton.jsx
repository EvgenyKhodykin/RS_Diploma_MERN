import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { removeBookId } from '../../redux/slices/cart.slice.js'

function DeleteButton({ bookId }) {
    const dispatch = useDispatch()

    const handleDeleteClick = id => {
        dispatch(removeBookId(id))
    }

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center'
            }}
        >
            <Tooltip title='Удалить из корзины'>
                <Button size='large' onClick={() => handleDeleteClick(bookId)}>
                    <DeleteIcon />
                </Button>
            </Tooltip>
        </Box>
    )
}

export default DeleteButton
