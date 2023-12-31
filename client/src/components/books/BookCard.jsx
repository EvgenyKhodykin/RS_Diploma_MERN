import React from 'react'
import { CardMedia, Typography, Paper, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import BuyBookmarkButtons from '../UI/BuyBookmarkButtons.jsx'
import DeleteButton from '../UI/DeleteButton.jsx'
import Counter from '../UI/Counter.jsx'

function BookCard(props) {
    const { _id, name, cover, price, author, location } = props

    return (
        <Paper
            elevation={5}
            sx={{
                height: 500,
                width: 300,
                p: 2,
                m: 1,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Link to={`/books/${_id}`}>
                <CardMedia
                    image={cover}
                    component='img'
                    alt={name}
                    title={name}
                    sx={{
                        height: 250,
                        objectFit: 'contain',
                        marginBottom: 3
                    }}
                />
            </Link>
            <Typography variant='BUTTON TEXT' sx={{ color: 'red', ml: 2 }}>
                {price} &#8381;
            </Typography>
            <Typography
                sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    mt: 2,
                    ml: 2,
                    color: 'black'
                }}
                variant='body1'
                component='h3'
            >
                {name}
            </Typography>
            <Typography variant='body1' sx={{ color: 'gray', m: 2 }}>
                {author}
            </Typography>
            {location === 'booksList' ? (
                <BuyBookmarkButtons bookId={_id} />
            ) : (
                <Box>
                    <Counter price={price} bookId={_id} />
                    <DeleteButton bookId={_id} />
                </Box>
            )}
        </Paper>
    )
}

export default BookCard
