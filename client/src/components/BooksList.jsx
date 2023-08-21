import { React } from 'react'
import { Container, Grid } from '@mui/material'
import BookPage from './pages/BookPage.jsx'

function BooksList({ handleBuyClick, handleBookmarkClick, books }) {
    return (
        <Container maxWidth='xl'>
            {books && (
                <Grid container spacing={3} sx={{ mt: 3 }}>
                    {books.map(book => (
                        <BookPage
                            key={book._id}
                            {...book}
                            handleBuyClick={handleBuyClick}
                            handleBookmarkClick={handleBookmarkClick}
                        />
                    ))}
                </Grid>
            )}
        </Container>
    )
}

export default BooksList
