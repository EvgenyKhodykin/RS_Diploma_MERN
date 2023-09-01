import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { addCartBookId, removeCartBookId } from '../../redux/slices/cart.slice.js'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'
import {
    addFavoritesBookId,
    removeFavoritesBookId
} from '../../redux/slices/favorites.slice.js'
import { getFavoritesStore } from '../../redux/selectors/favorites.selectors.js'
import ModalWindow from './ModalWindow.jsx'

function BuyBookmarkButtons({ bookId }) {
    const dispatch = useDispatch()
    const cartStore = useSelector(getCartStore)
    const favoritesStore = useSelector(getFavoritesStore)
    const isLoggedIn = useSelector(getIsLoggedIn)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalText, setModalText] = useState('')

    let buyButtonText = 'Купить'
    let buyButtonColor = 'primary'
    let toolTipBuyButtonText = 'Добавить в корзину'

    if (cartStore?.includes(bookId)) {
        buyButtonText = <AddShoppingCartIcon />
        buyButtonColor = '#37ceb4'
        toolTipBuyButtonText = null
    }

    const handleBookmarkClick = id => {
        if (!isLoggedIn) {
            setIsModalOpen(true)
            setModalText('Чтобы добавить в избранное нужна авторизация!')
        }
        if (!favoritesStore.includes(id) && isLoggedIn) {
            dispatch(addFavoritesBookId('favorites-books-ids', id))
        } else {
            dispatch(removeFavoritesBookId('favorites-books-ids', id))
        }
    }

    const handleBuyClick = id => {
        if (!isLoggedIn) {
            setIsModalOpen(true)
            setModalText('Чтобы добавить в корзину нужна авторизация!')
        }
        if (!cartStore.includes(id) && isLoggedIn) {
            dispatch(addCartBookId('cart-books-ids', id))
        } else if (cartStore.includes(id) && isLoggedIn) {
            dispatch(removeCartBookId('cart-books-ids', id))
        }
    }

    const handleModalClose = () => setIsModalOpen(false)

    return (
        <>
            <ModalWindow
                isOpen={isModalOpen}
                text={modalText}
                onClose={handleModalClose}
            />
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
        </>
    )
}

export default BuyBookmarkButtons
