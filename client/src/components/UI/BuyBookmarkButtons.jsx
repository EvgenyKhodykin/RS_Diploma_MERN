import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, IconButton, Modal, Paper, Tooltip, Typography } from '@mui/material'
import { addCartBookId } from '../../redux/slices/cart.slice.js'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'
import {
    addFavoritesBookId,
    removeFavoritesBookId
} from '../../redux/slices/favorites.slice.js'
import { getFavoritesStore } from '../../redux/selectors/favorites.selectors.js'

function BuyBookmarkButtons({ bookId }) {
    const dispatch = useDispatch()
    const cartStore = useSelector(getCartStore)
    const favoritesStore = useSelector(getFavoritesStore)
    const isLoggedIn = useSelector(getIsLoggedIn)
    const [open, setOpen] = useState(false)
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
            setOpen(true)
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
            setOpen(true)
            setModalText('Чтобы добавить в корзину нужна авторизация!')
        }
        if (!cartStore.includes(id) && isLoggedIn) {
            dispatch(addCartBookId('cart-books-ids', id))
        }
    }

    const handleModalClose = event => {
        if (event.target.id === 'closeIcon') setOpen(false)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleModalClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 500,
                        height: 100,
                        bgcolor: 'background.paper',
                        boxShadow: 24
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton onClick={handleModalClose}>
                            <CloseIcon id='closeIcon' />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant='body1' component='h2'>
                            {modalText}
                        </Typography>
                    </Box>
                </Paper>
            </Modal>
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
