import React from 'react'
import { CardContent, CardMedia, Typography, Rating, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import BuyBookmarkButtons from '../UI/BuyBookmarkButtons.jsx'

function BookCard(props) {
    const { _id, name, cover, price, rate } = props

    return (
        <Paper
            elevation={2}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                pt: 1
            }}
        >
            <Link to={`/books/${_id}`}>
                <CardMedia
                    image={cover}
                    component='img'
                    alt={name}
                    title={name}
                    sx={{ height: 250, objectFit: 'contain', marginBottom: 2 }}
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
            <BuyBookmarkButtons bookId={_id} />
        </Paper>
    )
}

export default BookCard
