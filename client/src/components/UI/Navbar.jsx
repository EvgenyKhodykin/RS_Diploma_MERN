import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Toolbar,
    InputBase,
    Badge,
    Typography
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import CatalogButton from './CatalogButton'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCategory } from '../../redux/slices/selectedCategory.slice.js'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'
import NavProfile from './NavProfile.jsx'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'

function Navbar() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn)
    const cartStore = useSelector(getCartStore)
    const cartBadgeNumber = cartStore.length > 0 ? cartStore.length : null

    const handleBookShopClick = () => {
        dispatch(setSelectedCategory(null))
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    }))

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }))

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'gray',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '50ch'
            }
        }
    }))

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
                    <Avatar variant='square' alt='logo' src='../public/favicon.png' />
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
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon color='primary' />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder='Что будем искать?'
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
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
                            <Badge badgeContent={null} color='secondary'>
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

                    <Box sx={{ textAlign: 'center', ml: 'auto' }}>
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

export default Navbar
