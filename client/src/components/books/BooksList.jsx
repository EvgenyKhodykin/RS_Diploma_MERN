import { React } from 'react'
import { Container, Grid } from '@mui/material'
import BookCard from './BookCard.jsx'

function BooksList({ handleBuyClick, handleBookmarkClick, books }) {
    return (
        <Container maxWidth='xl'>
            {books && (
                <Grid container spacing={3} sx={{ mt: 3 }}>
                    {books.map(book => (
                        <Grid item xs={12} md={3} key={book._id}>
                            <BookCard
                                {...book}
                                handleBuyClick={handleBuyClick}
                                handleBookmarkClick={handleBookmarkClick}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    )
}

export default BooksList
