import React from 'react'
import { Box, Button, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { removeBookId } from '../../redux/slices/cart.slice.js'

function DeleteButton() {
    const dispatch = useDispatch

    const handleDeleteClick = id => {
        dispatch(removeBookId(id))
    }

    return (
        <Box
            sx={{
                display: 'flex',
                mt: 3,
                width: '100%',
                justifyContent: 'center'
            }}
        >
            <Tooltip title='Удалить из корзины'>
                <Button onClick={handleDeleteClick}>
                    <DeleteIcon />
                </Button>
            </Tooltip>
        </Box>
    )
}

export default DeleteButton
