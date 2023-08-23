import React from 'react'
// import { useSelector } from 'react-redux'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
// import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Button, CardActions, IconButton, Tooltip } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addBookId } from '../../redux/slices/cart.slice.js'
// import { getCurrentUser } from '../../redux/selectors/users.selectors.js'

function BuyBookmarkButtons({ bookId }) {
    const dispatch = useDispatch()
    // const currentUser = useSelector(getCurrentUser)
    // const [favorites, setFavorites] = useState(currentUser.favorites)

    const handleBookmarkClick = id => {}

    const handleBuyClick = id => {
        dispatch(addBookId(id))
    }

    return (
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
                onClick={() => handleBuyClick(bookId)}
            >
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
