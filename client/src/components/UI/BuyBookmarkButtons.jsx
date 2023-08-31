import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { addCartBookId } from '../../redux/slices/cart.slice.js'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'
import { getCurrentUser, getIsLoggedIn } from '../../redux/selectors/users.selectors.js'
import {
    addFavoriteBookId,
    removeFavoriteBookId
} from '../../redux/slices/favorites.slice.js'
import { getFavoritesStore } from '../../redux/selectors/favorites.selectors.js'
import { updateCurrentUser } from '../../redux/slices/users.slice.js'

function BuyBookmarkButtons({ bookId }) {
    const dispatch = useDispatch()
    const cartStore = useSelector(getCartStore)
    const favoritesStore = useSelector(getFavoritesStore)
    const isLoggedIn = useSelector(getIsLoggedIn)
    const currentUser = isLoggedIn ? useSelector(getCurrentUser) : null
    let buyButtonText = 'Купить'
    let buyButtonColor = 'primary'
    let toolTipBuyButtonText = 'Добавить в корзину'

    if (cartStore?.includes(bookId)) {
        buyButtonText = <AddShoppingCartIcon />
        buyButtonColor = '#37ceb4'
        toolTipBuyButtonText = null
    }

    const handleBookmarkClick = id => {
        if (!isLoggedIn) return alert('Чтобы добавить в избранное нужна авторизация!')
        if (!favoritesStore.includes(id)) {
            dispatch(addFavoriteBookId(id))
            dispatch(updateCurrentUser({ ...currentUser, favorites: favoritesStore }))
        } else {
            dispatch(removeFavoriteBookId(id))
        }
    }

    const handleBuyClick = id => {
        if (!isLoggedIn) return alert('Чтобы добавить в корзину нужна авторизация!')
        if (!cartStore.includes(id)) dispatch(addCartBookId('cart-books-ids', id))
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
                    {favoritesStore.includes(bookId) ? (
                        <BookmarkIcon fontSize='large' sx={{ color: 'red' }} />
                    ) : (
                        <BookmarkBorderIcon fontSize='large' color='primary' />
                    )}
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default BuyBookmarkButtons
