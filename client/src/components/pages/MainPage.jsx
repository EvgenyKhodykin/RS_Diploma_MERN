import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BooksList from '../books/BooksList.jsx'
import Loading from '../UI/Loading.jsx'

function MainPage() {
    const books = useSelector(getBooks)

    if (books) {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h3' sx={{ my: 4 }}>
                    НОВИНКИ ЛИТЕРАТУРЫ
                </Typography>
                <BooksList books={books} />
            </Box>
        )
    }

    return <Loading />
}

export default MainPage
