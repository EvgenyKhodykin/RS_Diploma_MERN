import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BooksList from '../books/BooksList.jsx'
import Loading from '../UI/Loading.jsx'

function MainPage() {
    const books = useSelector(getBooks)
    document.title = 'Book Shop'

    if (books) {
        return (
            <>
                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Typography variant='h3'>НОВИНКИ ЛИТЕРАТУРЫ</Typography>
                </Box>
                <BooksList books={books} />
            </>
        )
    }

    return <Loading />
}

export default MainPage
