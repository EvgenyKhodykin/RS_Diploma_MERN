import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Container, Box, Paper, Button } from '@mui/material'
import emptyCartImage from '../../assets/empty-cart.png'
import { getCartStore } from '../../redux/selectors/cart.selectors.js'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BookCart from '../books/BookCart.jsx'

function CartPage() {
    const cartStore = useSelector(getCartStore)
    const allBooks = useSelector(getBooks)
    const currentBooks = allBooks.filter(book => cartStore.includes(book._id))

    if (currentBooks.length > 0) {
        return (
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    width: '100vw',
                    height: '100vh',
                    p: 2
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        mx: 2,
                        width: '60%',
                        flexWrap: 'wrap'
                    }}
                >
                    {currentBooks.map(book => (
                        <BookCart key={book._id} {...book} />
                    ))}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mx: 2,
                        width: '40%',
                        height: '50%',
                        flexWrap: 'wrap'
                    }}
                >
                    <Paper
                        elevation={5}
                        sx={{
                            p: 1,
                            width: '80%',
                            height: 380,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography variant='h4' color='primary'>
                            Итоговая сумма заказа:
                        </Typography>
                        <Typography variant='h4' sx={{ color: 'red' }}>
                            &#8381;
                        </Typography>
                        <Button variant='contained' sx={{ width: '100%' }}>
                            Оформить заказ
                        </Button>
                    </Paper>
                </Box>
            </Box>
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
