import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography, Container, Box, Paper, Button } from '@mui/material'
import emptyCartImage from '../../assets/empty-cart.png'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BookCard from '../books/BookCard.jsx'
import {
    getCartBooksIds,
    getCartFullBooksIds
} from '../../redux/selectors/cart.selectors.js'
import ModalWindow from '../UI/ModalWindow.jsx'

function CartPage() {
    const allBooks = useSelector(getBooks)
    const cartBooksIds = useSelector(getCartBooksIds)
    const storageAllBooksIds = useSelector(getCartFullBooksIds)
    const currentBooks = allBooks?.filter(book => cartBooksIds.includes(book._id))
    const totalPriceBooks = storageAllBooksIds?.reduce((acc, bookId) => {
        allBooks?.forEach(book => {
            if (book._id === bookId) acc.push(book)
        })
        return acc
    }, [])
    const totalPrice = totalPriceBooks.reduce((acc, book) => acc + book.price, 0)
    const location = 'cart'

    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleModalOpen = () => setIsModalOpen(true)
    const handleModalClose = () => setIsModalOpen(false)

    if (currentBooks && currentBooks?.length > 0) {
        return (
            <>
                <ModalWindow
                    isOpen={isModalOpen}
                    text='Извините, сервис в стадии разработки...'
                    onClose={handleModalClose}
                />
                <Container
                    maxWidth='xl'
                    sx={{
                        display: 'flex',
                        mt: 8
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            width: '60%',
                            flexWrap: 'wrap'
                        }}
                    >
                        {currentBooks.map(book => (
                            <BookCard key={book._id} {...book} location={location} />
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            ml: 2,
                            width: '40%'
                        }}
                    >
                        <Paper
                            elevation={5}
                            sx={{
                                p: 1,
                                mt: 1,
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
                                {totalPrice} &#8381;
                            </Typography>
                            <Button
                                variant='contained'
                                sx={{ width: '100%' }}
                                onClick={handleModalOpen}
                            >
                                Оформить заказ
                            </Button>
                        </Paper>
                    </Box>
                </Container>
            </>
        )
    } else if (cartBooksIds.length === 0 || !cartBooksIds) {
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
