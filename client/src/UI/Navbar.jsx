import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import {
    AppBar,
    Avatar,
    BottomNavigationAction,
    Box,
    Button,
    Toolbar,
    InputBase
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import CatalogButton from './CatalogButton'

function Navbar() {
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
        <AppBar position='static' sx={{ height: 90, display: 'flex' }}>
            <Toolbar
                sx={{
                    height: 90,
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: '#26a9e0'
                }}
            >
                <Box sx={{ display: 'flex' }}>
                    <Avatar variant='square' alt='logo' src='../public/favicon.png' />
                    <Link to='/'>
                        <Button size='large' sx={{ color: 'white' }}>
                            Book Shop
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ display: 'flex' }}>
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
                <Box>
                    <Link to='/bookmarks'>
                        <BottomNavigationAction
                            showLabel
                            sx={{ color: 'white' }}
                            label='Избранное'
                            icon={<BookmarkBorderIcon />}
                        ></BottomNavigationAction>
                    </Link>
                    <Link to='/cart'>
                        <BottomNavigationAction
                            showLabel
                            sx={{ color: 'white' }}
                            label='Корзина'
                            icon={<ShoppingBagOutlinedIcon />}
                        ></BottomNavigationAction>
                    </Link>
                    <Link to='/login'>
                        <BottomNavigationAction
                            showLabel
                            sx={{ color: 'white' }}
                            label='Войти'
                            icon={<AccountCircleIcon />}
                        ></BottomNavigationAction>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
