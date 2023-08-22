import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BooksList from '../books/BooksList.jsx'
import Snack from '../UI/Snackbar.jsx'
import Loading from '../UI/Loading.jsx'

function MainPage() {
    const books = useSelector(getBooks)
    const [isSnackOpen, setSnackOpen] = useState(false)
    const [snackText, setSnackText] = useState('')

    const handleBuyClick = id => {
        setSnackOpen(true)
        setSnackText('Товар добавлен в корзину')
    }

    const handleBookmarkClick = id => {
        setSnackOpen(true)
        setSnackText('Товар добавлен в избранное')
        // setBooks(
        //     books.map(book => {
        //         if (book.id === id) {
        //             return {
        //                 ...book,
        //                 isBookmarked: !book.isBookmarked
        //             }
        //         }
        //         return book
        //     })
        // )
    }

    if (books) {
        return (
            <>
                <Typography variant='h3' sx={{ textAlign: 'center', my: 4 }}>
                    НОВИНКИ ЛИТЕРАТУРЫ
                </Typography>
                <Container
                    sx={{
                        maxWidth: 'xl',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <BooksList
                        handleBuyClick={handleBuyClick}
                        handleBookmarkClick={handleBookmarkClick}
                        books={books}
                    />
                </Container>
                <Snack
                    isOpen={isSnackOpen}
                    handleClose={() => setSnackOpen(false)}
                    text={snackText}
                />
            </>
        )
    }

    return <Loading />
}

export default MainPage
