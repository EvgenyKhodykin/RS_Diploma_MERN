import { Box, CardMedia, ListItemButton, Typography } from '@mui/material'
import React from 'react'

function BookSearchCard({ _id, cover, name, author, onClick }) {
    const handleClick = id => {
        onClick(id)
    }

    return (
        <ListItemButton
            sx={{
                display: 'flex',
                mb: 2,
                alignItems: 'center'
            }}
            onClick={() => handleClick(_id)}
        >
            <CardMedia
                component='img'
                src={cover}
                alt={name}
                sx={{ height: 60, width: 50, objectFit: 'contain', mr: 2 }}
            />
            <Box
                sx={{
                    height: 60,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    variant='body1'
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical'
                    }}
                >
                    {name}
                </Typography>
                <Typography variant='body2' sx={{ color: 'grey' }}>
                    {author}
                </Typography>
            </Box>
        </ListItemButton>
    )
}

export default BookSearchCard
