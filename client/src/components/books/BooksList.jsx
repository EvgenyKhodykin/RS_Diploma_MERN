import { React } from 'react'
import { Box } from '@mui/material'
import BookCard from './BookCard.jsx'

function BooksList({ books }) {
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
            {books.map(book => (
                <BookCard key={book._id} {...book} location={location} />
            ))}
        </Box>
    )
}

export default BooksList
