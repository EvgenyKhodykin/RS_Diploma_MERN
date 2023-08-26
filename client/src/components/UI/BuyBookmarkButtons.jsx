import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { Button, CardActions, IconButton, Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addBookId } from '../../redux/slices/cart.slice.js'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'

function BuyBookmarkButtons({ bookId }) {
    const dispatch = useDispatch()
    const cartStore = useSelector(getCartStore)
    const isLoggedIn = useSelector(getIsLoggedIn)
    let buyButtonText = 'Купить'
    let toolTipBuyButtonText = 'Добавить в корзину'

    if (cartStore.includes(bookId)) {
        buyButtonText = <AddShoppingCartIcon />
        toolTipBuyButtonText = null
    }

    const handleBookmarkClick = id => {
        if (!isLoggedIn) return alert('Чтобы добавить в избранное нужна авторизация!')
    }

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
            <Tooltip title={toolTipBuyButtonText}>
                <Button
                    size='large'
                    variant='contained'
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
        </CardActions>
    )
}

export default BuyBookmarkButtons
