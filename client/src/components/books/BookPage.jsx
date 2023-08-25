import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    Box,
    Button,
    Card,
    CardMedia,
    Container,
    Paper,
    Rating,
    Typography
} from '@mui/material'
import { getBookById } from '../../redux/selectors/books.selectors.js'
import Loading from '../UI/Loading.jsx'
import BuyBookmarkButtons from '../UI/BuyBookmarkButtons.jsx'
import NewCommentForm from '../comments/NewCommentForm.jsx'

function BookPage() {
    const [formIsVisible, setFormIsVisible] = useState(false)
    const { bookId } = useParams()
    const currentBook = useSelector(getBookById(bookId))

    const handleCommentClick = () => {
        if (!formIsVisible) setFormIsVisible(true)
        setFormIsVisible(!formIsVisible)
    }

    if (currentBook) {
        return (
            <Container maxWidth='xl'>
                <Container
                    maxWidth='lg'
                    sx={{
                        mt: 4,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Card>
                        <CardMedia
                            image={currentBook.cover}
                            component='img'
                            alt={currentBook.name}
                            title={currentBook.name}
                            sx={{ height: 500, objectFit: 'contain' }}
                        />
                    </Card>
                    <Paper
                        elevation={1}
                        sx={{
                            marginLeft: 5,
                            width: '35%',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography
                            variant='h6'
                            sx={{ textAlign: 'center', marginBottom: 6 }}
                        >
                            {currentBook.name}
                        </Typography>
                        <Typography>
                            <Rating
                                readOnly
                                defaultValue={currentBook.rate}
                                precision={0.5}
                            />
                        </Typography>
                        <Typography variant='h4' sx={{ color: 'red', marginTop: 6 }}>
                            {currentBook.price} &#8381;
                        </Typography>
                        <BuyBookmarkButtons bookId={bookId} />
                    </Paper>
                </Container>
                <Container
                    sx={{
                        maxWidth: 'lg',
                        mt: 4,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography variant='body1'>{currentBook.description}</Typography>
                </Container>
                <Container
                    sx={{
                        maxWidth: 'lg',
                        mt: 4,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='h3'>отзывы</Typography>
                        <Button
                            variant='contained'
                            size='large'
                            sx={{ backgroundColor: '#26a9e0', height: 40, ml: 5 }}
                            onClick={handleCommentClick}
                        >
                            Оставить отзыв
                        </Button>
                    </Box>
                </Container>
                {formIsVisible && <NewCommentForm />}
            </Container>
        )
    }
    return <Loading />
}

export default BookPage
