import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Avatar, Box, Button, Badge, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
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
import bookShopLogo from '../../assets/favicon.ico'

function Navbar() {
    const isLoggedIn = useSelector(getIsLoggedIn)
    const cartBooksIds = useSelector(getCartBooksIds)
    const favoritesStore = useSelector(getFavoritesStore)
    const favoritesBadgeNumber =
        favoritesStore?.length > 0 ? favoritesStore?.length : null
    const cartBadgeNumber = [...new Set(cartBooksIds)].length
    const mobileSize = useMediaQuery('(min-width:500px)')

    return (
        <AppBar
            position='static'
            sx={{
                flexShrink: 1,
                backgroundColor: '#26a9e0',
                minHeight: 80,
                p: 2,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            {mobileSize && (
                <Link to='/'>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar variant='square' alt='logo' src={bookShopLogo} />
                        <Button size='large' sx={{ color: 'white' }}>
                            Book Shop
                        </Button>
                    </Box>
                </Link>
            )}

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
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center'
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
                        mx: 3
                        // width: '33%'
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
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                        // width: '33%'
                    }}
                >
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <Box>
                            <Link to='auth/signIn'>
                                <AccountCircleIcon
                                    fontSize='large'
                                    sx={{ color: 'white', ml: 0.4 }}
                                />

                                <Typography
                                    variant='body2'
                                    sx={{ color: 'white', mt: 0.5 }}
                                >
                                    Войти
                                </Typography>
                            </Link>
                        </Box>
                    )}
                </Box>
            </Box>
        </AppBar>
    )
}

export default Navbar
