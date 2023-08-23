import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Container } from '@mui/material'
import emptyCartImage from '../../assets/empty-cart.png'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BookCart from '../books/BookCart.jsx'

function CartPage() {
    const cartStore = useSelector(getCartStore)
    const allBooks = useSelector(getBooks)
    const currentBooks =
        allBooks.length > 0 ? allBooks.filter(book => cartStore.includes(book._id)) : []

    if (currentBooks.length > 0) {
        return (
            <>
                {currentBooks.map(book => (
                    <BookCart key={book._id} {...book} />
                ))}
            </>
        )
    } else {
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
                        В корзине пока ничего нет
                    </Typography>
                    <Typography variant='body2' sx={{ mt: 2, color: 'grey' }}>
                        Воспользуйтесь поиском или перейдите в каталог , чтобы найти
                        интересные товары
                    </Typography>
                </Container>
            </Container>
        )
    }
}

export default CartPage
