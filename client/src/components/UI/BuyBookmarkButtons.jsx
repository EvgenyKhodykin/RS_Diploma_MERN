import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { Button, CardActions, IconButton, Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addBookId } from '../../redux/slices/cart.slice.js'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'

function BuyBookmarkButtons({ bookId }) {
    const dispatch = useDispatch()
    const cartStore = useSelector(getCartStore)
    let buyButtonText = 'Купить'
    let buyButtonColor = { backgroundColor: '#26a9e0' }

    if (cartStore.includes(bookId)) {
        buyButtonText = <AddShoppingCartIcon />
        buyButtonColor = { backgroundColor: '#37ceb4' }
    }

    const handleBookmarkClick = id => {}

    const handleBuyClick = id => {
        if (!cartStore.includes(bookId)) dispatch(addBookId(id))
    }

    return (
        <CardActions
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Tooltip title='Добавить в корзину'>
                <Button
                    size='large'
                    variant='contained'
                    sx={buyButtonColor}
                    onClick={() => handleBuyClick(bookId)}
                >
                    {buyButtonText}
                </Button>
            </Tooltip>
            <Tooltip title='Добавить в избранное'>
                <IconButton onClick={() => handleBookmarkClick(bookId)}>
                    <BookmarkBorderIcon fontSize='large' sx={{ color: '#26a9e0' }} />
                    {/* <BookmarkIcon fontSize='large' sx={{ color: 'red' }} /> */}
                </IconButton>
            </Tooltip>
        </CardActions>
    )
}

export default BuyBookmarkButtons
