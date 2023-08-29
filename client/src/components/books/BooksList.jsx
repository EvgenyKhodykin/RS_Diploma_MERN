import { React } from 'react'
import { Box } from '@mui/material'
import BookCard from './BookCard.jsx'
import { useSelector } from 'react-redux'
import { getSelectedCategory } from '../../redux/selectors/selectedCategory.selectors.js'

function BooksList({ books }) {
    const selectedCategory = useSelector(getSelectedCategory)
    const filteredBooks = selectedCategory
        ? books.filter(book => book.category === selectedCategory)
        : books
    const location = 'booksList'

    return (
        <Box
            sx={{
                width: '80%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                mt: 4
            }}
        >
            {filteredBooks.map(book => (
                <BookCard key={book._id} {...book} location={location} />
            ))}
        </Box>
    )
}

export default BooksList
