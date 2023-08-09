import React from 'react'
import { Typography, Container } from '@mui/material'
// import Image from 'mui-image'
import emptyCartImage from './empty-cart.png'

function CartPage() {
    return (
        <Container
            sx={{
                maxWidth: 'xl',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography
                variant='h3'
                component={'h2'}
                sx={{ mt: 3 }}
            >
                Корзина
            </Typography>
            <Container sx={{ mt: 20, textAlign: 'center' }}>
                <img
                    src={emptyCartImage}
                    alt='emptyCartImage'
                />
                <Typography
                    variant='h5'
                    sx={{ mt: 2 }}
                >
                    В корзине ничего нет
                </Typography>
                <Typography
                    variant='body2'
                    sx={{ mt: 2, color: 'grey' }}
                >
                    Воспользуйтесь поиском или перейдите в каталог , чтобы найти
                    интересные товары
                </Typography>
            </Container>
        </Container>
    )
}

export default CartPage
