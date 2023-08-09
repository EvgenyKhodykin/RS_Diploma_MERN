import { React } from 'react'
import { Container, Grid, Typography } from '@mui/material'

import BookPage from './BookPage'

function BooksList({ handleBuyClick, handleBookmarkClick, books }) {
    return (
        <Container maxWidth='xl'>
            <Typography
                variant='h3'
                component={'h2'}
                sx={{ mt: 2, mx: 0 }}
            >
                Вся литература
            </Typography>
            {books && (
                <Grid
                    container
                    spacing={3}
                    sx={{ mt: 3 }}
                >
                    {books.map(book => (
                        <BookPage
                            key={book.id}
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
