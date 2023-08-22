import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card, CardMedia, Container, Typography } from '@mui/material'
import { getBookById } from '../../redux/selectors/books.selectors.js'
import Loading from '../UI/Loading.jsx'

function BookPage() {
    const { bookId } = useParams()
    const currentBook = useSelector(getBookById(bookId))

    if (currentBook) {
        return (
            <>
                <Container
                    sx={{
                        maxWidth: 'xl',
                        mt: 8,
                        display: 'flex',
                        border: '1px red solid'
                    }}
                >
                    <CardMedia
                        image={currentBook.cover}
                        component='img'
                        alt={currentBook.name}
                        title={currentBook.name}
                        sx={{ maxHeight: 500, objectFit: 'contain' }}
                    />
                    <Card>
                        <Typography>{currentBook.description}</Typography>
                    </Card>
                </Container>
            </>
        )
    }
    return <Loading />
}

export default BookPage
