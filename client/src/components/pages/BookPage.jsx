import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Rating,
    Typography
} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBookById } from '../../redux/selectors/books.selectors.js'

function BookPage() {
    const { bookId } = useParams()
    const currentBook = useSelector(getBookById(bookId))
    // sconsole.log(currentBook)

    return (
        <>
            <Container
                sx={{
                    maxWidth: 'xl',
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Card
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >
                    <CardMedia
                        image={currentBook.cover}
                        component='img'
                        alt={currentBook.name}
                        title={currentBook.name}
                        sx={{ maxHeight: 400, objectFit: 'contain', marginBottom: 2 }}
                    />
                    <CardContent>
                        <Typography variant='BUTTON TEXT' sx={{ color: 'red' }}>
                            {currentBook.price} &#8381;
                        </Typography>
                        <Typography
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                                my: 2
                            }}
                            variant='body1'
                            component='h3'
                        >
                            {currentBook.name}
                        </Typography>
                    </CardContent>
                    <Rating readOnly defaultValue={currentBook.rate} precision={0.5} />
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
                            // onClick={() => handleBuyClick(_id)}
                        >
                            Купить
                        </Button>
                        {/* <Tooltip title='Добавить в избранное'></Tooltip> */}
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}

export default BookPage
