/* eslint-disable no-unneeded-ternary */
import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { useDispatch, useSelector } from 'react-redux'
import { addCartBookId, removeCartOneBookId } from '../../redux/slices/cart.slice.js'
import { getCartFullBooksIds } from '../../redux/selectors/cart.selectors.js'

function Counter({ bookId }) {
    const cartFullBooksIds = useSelector(getCartFullBooksIds)
    const prevCount = cartFullBooksIds.filter(id => id === bookId).length
    const dispatch = useDispatch()
    const [count, setCount] = useState(prevCount)

    const handleIncrementClick = id => {
        setCount(prev => prev + 1)
        dispatch(addCartBookId('cart-books-ids', id))
    }

    const handleDecrementClick = id => {
        if (count > 1) {
            setCount(prev => prev - 1)
            dispatch(removeCartOneBookId('cart-books-ids', id))
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Button
                disabled={count > 1 ? false : true}
                size='large'
                onClick={() => handleDecrementClick(bookId)}
            >
                <RemoveCircleOutlineIcon />
            </Button>
            <Typography color='primary'>{count}</Typography>
            <Button size='large' onClick={() => handleIncrementClick(bookId)}>
                <AddCircleOutlineIcon />
            </Button>
        </Box>
    )
}

export default Counter
