import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Container, Typography } from '@mui/material'
import emptyCartImage from '../../assets/empty-cart.png'
import { getFavoritesStore } from '../../redux/selectors/favorites.selectors.js'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BookCard from '../books/BookCard.jsx'

function FavoritesPage() {
    const favoriteStore = useSelector(getFavoritesStore)
    const books = useSelector(getBooks)
    const favoriteBooks = books?.filter(book => favoriteStore.includes(book._id))
    document.title = 'Избранное'

    if (favoriteBooks && favoriteBooks.length > 0) {
        return (
            <Box
                sx={{
                    width: '80%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    mt: 8
                }}
            >
                {favoriteBooks.map(book => (
                    <BookCard key={book._id} {...book} location={'booksList'} />
                ))}
            </Box>
        )
    }
    return (
        <Container
            sx={{
                maxWidth: 'xl',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Container sx={{ mt: 20, textAlign: 'center' }}>
                <img src={emptyCartImage} alt='emptyCartImage' />
                <Typography variant='h5' sx={{ mt: 2 }}>
                    В избранных пока ничего нет
                </Typography>
                <Typography variant='body2' sx={{ mt: 2, color: 'grey' }}>
                    Воспользуйтесь поиском или перейдите в каталог , чтобы найти
                    интересные товары
                </Typography>
            </Container>
        </Container>
    )
}

export default FavoritesPage
