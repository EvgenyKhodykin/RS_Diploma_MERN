import { CardMedia, ListItemButton } from '@mui/material'
import React from 'react'

function BookSearchCard({ _id, cover, name, onClick }) {
    const handleClick = id => {
        onClick(id)
    }

    return (
        <ListItemButton
            sx={{
                display: 'flex',
                mb: 2,
                alignItems: 'center'
                // cursor: 'pointer'
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
        </ListItemButton>
    )
}

export default BookSearchCard
