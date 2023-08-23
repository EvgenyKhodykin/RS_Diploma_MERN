import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
// import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Button, CardActions, IconButton, Tooltip } from '@mui/material'
import { getCurrentUser } from '../../redux/selectors/users.selectors.js'

function BuyBookmarkButtons({ bookId }) {
    const currentUser = useSelector(getCurrentUser)
    const [favorites, setFavorites] = useState(currentUser.favorites)

    const handleBookmarkClick = id => {
        const newFavorites = [...favorites]
        newFavorites.push(id)
        setFavorites(newFavorites)
        console.log(favorites)
    }

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
                <IconButton onClick={() => handleBookmarkClick(bookId)}>
                    <BookmarkBorderIcon fontSize='large' sx={{ color: '#26a9e0' }} />
                    {/* <BookmarkIcon fontSize='large' sx={{ color: 'red' }} /> */}
                </IconButton>
            </Tooltip>
        </CardActions>
    )
}

export default BuyBookmarkButtons
