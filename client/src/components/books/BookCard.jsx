import React from 'react'
import { CardMedia, Typography, Rating, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

function BookCard(props) {
    const { _id, name, cover, price, rate } = props

    return (
        <Paper
            elevation={3}
            sx={{
                height: 500,
                width: 300,
                p: 1,
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
                    sx={{ height: 250, objectFit: 'contain', marginBottom: 3 }}
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
                    ml: 2
                }}
                variant='body1'
                component='h3'
            >
                {name}
            </Typography>

            <Rating readOnly defaultValue={rate} precision={0.5} sx={{ mt: 2, ml: 2 }} />
        </Paper>
    )
}

export default BookCard
