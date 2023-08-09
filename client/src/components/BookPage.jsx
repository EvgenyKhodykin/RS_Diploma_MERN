import React from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    CardActions,
    Button,
    IconButton,
    Tooltip,
    Rating
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

function BookPage(props) {
    const {
        id,
        name,
        poster,
        price,
        rate,
        handleBuyClick,
        handleBookmarkClick,
        isBookmarked
    } = props

    return (
        <Grid
            item
            xs={12}
            md={3}
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
                    image={poster}
                    component='img'
                    alt={name}
                    title={name}
                    sx={{ maxHeight: 200, objectFit: 'contain' }}
                />
                <CardContent>
                    <Typography
                        variant='BUTTON TEXT'
                        sx={{ color: 'red' }}
                    >
                        {price} &#8381;
                    </Typography>
                    <Typography
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical'
                        }}
                        variant='body1'
                        component='h3'
                    >
                        {name}
                    </Typography>
                </CardContent>
                <Rating
                    readOnly
                    defaultValue={rate}
                    precision={0.5}
                />
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
                        onClick={() => handleBuyClick(id)}
                    >
                        Купить
                    </Button>
                    <Tooltip title='Добавить в избранное'>
                        <IconButton onClick={() => handleBookmarkClick(id)}>
                            {!isBookmarked ? (
                                <BookmarkBorderIcon
                                    fontSize='large'
                                    sx={{ color: '#26a9e0' }}
                                />
                            ) : (
                                <BookmarkIcon
                                    fontSize='large'
                                    sx={{ color: '#26a9e0' }}
                                />
                            )}
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default BookPage
