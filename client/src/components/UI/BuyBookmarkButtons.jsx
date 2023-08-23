import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
// import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Button, CardActions, IconButton, Tooltip } from '@mui/material'

function BuyBookmarkButtons() {
    return (
        <CardActions
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Button size='large' variant='contained' sx={{ backgroundColor: '#26a9e0' }}>
                Купить
            </Button>
            <Tooltip title='Добавить в избранное'>
                <IconButton>
                    <BookmarkBorderIcon fontSize='large' sx={{ color: '#26a9e0' }} />
                    {/* <BookmarkIcon fontSize='large' sx={{ color: '#26a9e0' }} /> */}
                </IconButton>
            </Tooltip>
        </CardActions>
    )
}

export default BuyBookmarkButtons
