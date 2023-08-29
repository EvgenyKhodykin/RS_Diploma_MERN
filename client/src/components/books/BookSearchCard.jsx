import { CardMedia, ListItem } from '@mui/material'
import React from 'react'

function BookSearchCard({ _id, cover, name, onClick }) {
    const handleClick = id => {
        onClick(id)
    }

    return (
        <ListItem
            sx={{
                display: 'flex',
                mb: 2,
                borderBottom: '1px solid lightgrey',
                alignItems: 'center',
                cursor: 'pointer'
            }}
            onClick={() => handleClick(_id)}
        >
            <CardMedia
                component='img'
                src={cover}
                alt={name}
                sx={{ height: 50, width: 50, objectFit: 'contain', mr: 2 }}
            />
            {name}
        </ListItem>
    )
}

export default BookSearchCard
