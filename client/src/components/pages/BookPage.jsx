import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    Button,
    Card,
    CardActions,
    CardMedia,
    Container,
    IconButton,
    Rating,
    Tooltip,
    Typography
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
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
                    <Card
                        sx={{
                            marginLeft: 5,
                            width: '60%',
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
                        <CardActions
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Button
                                size='large'
                                variant='contained'
                                sx={{ backgroundColor: '#26a9e0' }}
                            >
                                Купить
                            </Button>
                            <Tooltip title='Добавить в избранное'>
                                <IconButton>
                                    <BookmarkBorderIcon
                                        fontSize='large'
                                        sx={{ color: '#26a9e0' }}
                                    />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </Container>
                <Container
                    sx={{
                        maxWidth: 'xl',
                        mt: 8,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography variant='body1'>{currentBook.description}</Typography>
                </Container>
            </>
        )
    }
    return <Loading />
}

export default BookPage
