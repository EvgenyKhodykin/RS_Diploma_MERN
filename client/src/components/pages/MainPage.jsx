import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import BooksList from '../BooksList'
import Snack from '../../UI/SnackBar'
import API from '../../api'

function MainPage() {
    const [books, setBooks] = useState([])
    const [isSnackOpen, setSnackOpen] = useState(false)
    const [snackText, setSnackText] = useState('')

    useEffect(() => {
        API.fetchAll().then(data => setBooks(data))
    }, [])

    const handleBuyClick = id => {
        setSnackOpen(true)
        setSnackText('Товар добавлен в корзину')
    }

    const handleBookmarkClick = id => {
        setSnackOpen(true)
        setSnackText('Товар добавлен в избранное')
        setBooks(
            books.map(book => {
                if (book.id === id) {
                    return {
                        ...book,
                        isBookmarked: !book.isBookmarked
                    }
                }
                return book
            })
        )
    }

    return (
        <>
            <Container
                sx={{
                    maxWidth: 'xl',
                    mt: 2,
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

export default MainPage
