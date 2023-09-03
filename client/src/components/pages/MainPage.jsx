import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BooksList from '../books/BooksList.jsx'
import Loading from '../UI/Loading.jsx'

function MainPage() {
    const books = useSelector(getBooks)
    document.title = 'Book Shop'

    if (books) {
        return (
            <>
                <Typography variant='h3' sx={{ mt: 8 }}>
                    НОВИНКИ ЛИТЕРАТУРЫ
                </Typography>
                <BooksList books={books} />
            </>
        )
    }

    return <Loading />
}

export default MainPage
