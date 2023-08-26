import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addBookId } from '../../redux/slices/cart.slice.js'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'

function BuyBookmarkButtons({ bookId }) {
    const dispatch = useDispatch()
    const cartStore = useSelector(getCartStore)
    const isLoggedIn = useSelector(getIsLoggedIn)
    let buyButtonText = 'Купить'
    let buyButtonColor = 'primary'
    let toolTipBuyButtonText = 'Добавить в корзину'

    if (cartStore.includes(bookId)) {
        buyButtonText = <AddShoppingCartIcon />
        buyButtonColor = '#37ceb4'
        toolTipBuyButtonText = null
    }

    const handleBookmarkClick = id => {
        if (!isLoggedIn) return alert('Чтобы добавить в избранное нужна авторизация!')
    }

    const handleBuyClick = id => {
        if (!cartStore.includes(bookId)) dispatch(addBookId(id))
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                ml: 1
            }}
        >
            <Tooltip title={toolTipBuyButtonText}>
                <Button
                    size='large'
                    variant='contained'
                    sx={{ height: 45, backgroundColor: `${buyButtonColor}` }}
                    onClick={() => handleBuyClick(bookId)}
                >
                    {buyButtonText}
                </Button>
            </Tooltip>
            <Tooltip title='Добавить в избранное'>
                <IconButton onClick={() => handleBookmarkClick(bookId)}>
                    <BookmarkBorderIcon fontSize='large' color='primary' />
                    {/* <BookmarkIcon fontSize='large' sx={{ color: 'red' }} /> */}
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default BuyBookmarkButtons
