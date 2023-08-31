import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Badge,
    Typography,
    InputBase,
    List
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import CatalogButton from './CatalogButton'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'
import NavProfile from './NavProfile.jsx'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'
import { getFavoritesStore } from '../../redux/selectors/favorites.selectors.js'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import Loading from './Loading.jsx'
import BookSearchCard from '../books/BookSearchCard.jsx'

function Navbar() {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(getIsLoggedIn)
    const cartStore = useSelector(getCartStore)
    const books = useSelector(getBooks)
    const favoritesStore = useSelector(getFavoritesStore)
    const favoritesBadgeNumber =
        favoritesStore?.length > 0 ? favoritesStore?.length : null
    const cartBadgeNumber = cartStore?.length > 0 ? cartStore?.length : null
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = event => {
        setSearchValue(event.target.value)
    }

    const handleListClick = id => {
        navigate(`books/${id}`)
        setSearchValue('')
    }

    const filteredBooks = searchValue
        ? books.filter(book =>
              book.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : null

    if (books) {
        return (
            <>
                <AppBar
                    position='static'
                    sx={{
                        height: 90,
                        px: 2,
                        display: 'flex',
                        backgroundColor: '#26a9e0',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
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
                            <Button size='large' sx={{ color: 'white' }}>
                                Book Shop
                            </Button>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex'
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
                                <Typography
                                    variant='body2'
                                    sx={{ color: 'white', mt: 1 }}
                                >
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
                </AppBar>
                {filteredBooks && (
                    <Box
                        sx={{
                            width: 600,
                            p: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'absolute',
                            zIndex: 1,
                            backgroundColor: 'white',
                            left: '33%',
                            borderRadius: 1,
                            boxShadow: '0 0 8px grey'
                        }}
                    >
                        <List>
                            {filteredBooks.map(book => (
                                <BookSearchCard
                                    key={book._id}
                                    {...book}
                                    onClick={handleListClick}
                                />
                            ))}
                        </List>
                    </Box>
                )}
            </>
        )
    }
    return <Loading />
}

export default Navbar
