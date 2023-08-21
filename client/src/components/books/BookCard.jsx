import React from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    IconButton,
    Tooltip,
    Rating
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Link } from 'react-router-dom'

function BookCard(props) {
    const {
        _id,
        name,
        cover,
        price,
        rate,
        handleBuyClick,
        handleBookmarkClick,
        isBookmarked
    } = props

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <Link to={`/books/${_id}`}>
                <CardMedia
                    image={cover}
                    component='img'
                    alt={name}
                    title={name}
                    sx={{ maxHeight: 250, objectFit: 'contain', marginBottom: 2 }}
                />
            </Link>
            <CardContent>
                <Typography variant='BUTTON TEXT' sx={{ color: 'red' }}>
                    {price} &#8381;
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
                    {name}
                </Typography>
            </CardContent>
            <Rating readOnly defaultValue={rate} precision={0.5} />
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
                    onClick={() => handleBuyClick(_id)}
                >
                    Купить
                </Button>
                <Tooltip title='Добавить в избранное'>
                    <IconButton onClick={() => handleBookmarkClick(_id)}>
                        {!isBookmarked ? (
                            <BookmarkBorderIcon
                                fontSize='large'
                                sx={{ color: '#26a9e0' }}
                            />
                        ) : (
                            <BookmarkIcon fontSize='large' sx={{ color: '#26a9e0' }} />
                        )}
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default BookCard
