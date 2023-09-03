import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Avatar, Box, Button, Badge, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import CatalogButton from './CatalogButton'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'
import NavProfile from './NavProfile.jsx'
import { getCartBooksIds } from '../../redux/selectors/cart.selectors.js'
import { getFavoritesStore } from '../../redux/selectors/favorites.selectors.js'
import Search from './Search.jsx'
import bookShopLogo from '../../assets/favicon.png'

function Navbar() {
    const isLoggedIn = useSelector(getIsLoggedIn)
    const cartBooksIds = useSelector(getCartBooksIds)
    const favoritesStore = useSelector(getFavoritesStore)
    const favoritesBadgeNumber =
        favoritesStore?.length > 0 ? favoritesStore?.length : null
    const cartBadgeNumber = [...new Set(cartBooksIds)].length

    return (
        <AppBar
            position='static'
            sx={{
                height: 90,
                p: 2,
                display: 'flex',
                backgroundColor: '#26a9e0',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar variant='square' alt='logo' src={bookShopLogo} />
                <Link to='/'>
                    <Button size='large' sx={{ color: 'white' }}>
                        Book Shop
                    </Button>
                </Link>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 40
                }}
            >
                <CatalogButton />
                <Search />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    width: '20%',
                    height: '100%',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        width: '33%'
                    }}
                >
                    <Link to='/favorites'>
                        <Badge badgeContent={favoritesBadgeNumber} color='secondary'>
                            <BookmarkBorderIcon
                                fontSize='large'
                                sx={{ color: 'white' }}
                            />
                        </Badge>
                        <Typography variant='body2' sx={{ color: 'white', mt: 1 }}>
                            Избранное
                        </Typography>
                    </Link>
                </Box>

                <Box
                    sx={{
                        textAlign: 'center',
                        width: '33%'
                    }}
                >
                    <Link to='/cart'>
                        <Badge badgeContent={cartBadgeNumber} color='secondary'>
                            <ShoppingBagOutlinedIcon
                                fontSize='large'
                                sx={{ color: 'white' }}
                            />
                        </Badge>
                        <Typography variant='body2' sx={{ color: 'white', mt: 1 }}>
                            Корзина
                        </Typography>
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '33%'
                    }}
                >
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <Link to='auth/signIn'>
                            <AccountCircleIcon fontSize='large' sx={{ color: 'white' }} />

                            <Typography variant='body2' sx={{ color: 'white', mt: 0.5 }}>
                                Войти
                            </Typography>
                        </Link>
                    )}
                </Box>
            </Box>
        </AppBar>
    )
}

export default Navbar
