import { React } from 'react'
import { Container, Grid } from '@mui/material'
import BookCard from './BookCard.jsx'
import { useSelector } from 'react-redux'
import { getSelectedCategory } from '../../redux/selectors/selectedCategory.selectors.js'

function BooksList({ handleBuyClick, handleBookmarkClick, books }) {
    const selectedCategory = useSelector(getSelectedCategory)
    const filteredBooks = selectedCategory
        ? books.filter(book => book.category === selectedCategory)
        : books

    return (
        <Container maxWidth='xl'>
            {books && (
                <Grid container spacing={3} sx={{ mt: 3 }}>
                    {filteredBooks.map(book => (
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
