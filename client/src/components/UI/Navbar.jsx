import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Toolbar,
    Badge,
    Typography,
    InputBase
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import CatalogButton from './CatalogButton'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCategory } from '../../redux/slices/selectedCategory.slice.js'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'
import NavProfile from './NavProfile.jsx'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'
import { getFavoritesStore } from '../../redux/selectors/favorites.selectors.js'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import Loading from './Loading.jsx'

function Navbar() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn)
    const cartStore = useSelector(getCartStore)
    const books = useSelector(getBooks)
    const favoritesStore = useSelector(getFavoritesStore)
    const favoritesBadgeNumber = favoritesStore.length > 0 ? favoritesStore.length : null
    const cartBadgeNumber = cartStore.length > 0 ? cartStore.length : null
    const [searchValue, setSearchValue] = useState('')

    console.log(searchValue)

    const handleBookShopClick = () => {
        dispatch(setSelectedCategory(null))
    }

    const handleSearch = event => {
        setSearchValue(event.target.value)
    }

    // const filteredBooks = books
    //     ? books.filter(book =>
    //           book.name.toLowerCase().includes(searchValue.toLowerCase())
    //       )
    //     : books

    if (books) {
        return (
            <AppBar
                position='static'
                sx={{ height: 90, display: 'flex', backgroundColor: '#26a9e0' }}
            >
                <Toolbar
                    sx={{
                        height: 90,
                        display: 'flex'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex'
                        }}
                    >
                        <Avatar
                            variant='square'
                            alt='logo'
                            src='../../../public/favicon.png'
                        />
                        <Link to='/'>
                            <Button
                                size='large'
                                sx={{ color: 'white' }}
                                onClick={handleBookShopClick}
                            >
                                Book Shop
                            </Button>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            ml: '20%'
                        }}
                    >
                        <CatalogButton />
                        <InputBase
                            sx={{
                                display: 'flex',
                                backgroundColor: 'white',
                                borderRadius: 1,
                                width: 450,
                                ml: 2,
                                px: 2,
                                color: 'gray'
                            }}
                            placeholder='Что будем искать?'
                            type='text'
                            onChange={handleSearch}
                            value={searchValue}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '20%',
                            ml: 'auto',
                            height: 60
                        }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Link to='/favorites'>
                                <Badge
                                    badgeContent={favoritesBadgeNumber}
                                    color='secondary'
                                >
                                    <BookmarkBorderIcon
                                        fontSize='large'
                                        sx={{ color: 'white' }}
                                    />
                                </Badge>
                                <Typography
                                    variant='body2'
                                    sx={{ color: 'white', mt: 1 }}
                                >
                                    Избранное
                                </Typography>
                            </Link>
                        </Box>

                        <Box sx={{ textAlign: 'center', ml: 'auto' }}>
                            <Link to='/cart'>
                                <Badge badgeContent={cartBadgeNumber} color='secondary'>
                                    <ShoppingBagOutlinedIcon
                                        fontSize='large'
                                        sx={{ color: 'white' }}
                                    />
                                </Badge>
                                <Typography
                                    variant='body2'
                                    sx={{ color: 'white', mt: 1 }}
                                >
                                    Корзина
                                </Typography>
                            </Link>
                        </Box>
                        <Box sx={{ textAlign: 'center', ml: 'auto', width: 50 }}>
                            {isLoggedIn ? (
                                <NavProfile />
                            ) : (
                                <Link to='auth/signIn'>
                                    <AccountCircleIcon
                                        fontSize='large'
                                        sx={{ color: 'white' }}
                                    />

                                    <Typography
                                        variant='body2'
                                        sx={{ color: 'white', mt: 0.5 }}
                                    >
                                        Войти
                                    </Typography>
                                </Link>
                            )}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        )
    }
    return <Loading />
}

export default Navbar
