import { Button, Container, TextField } from '@mui/material'
import React from 'react'

function NewCommentForm() {
    return (
        <Container
            maxWidth='lg'
            sx={{
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}
        >
            <TextField
                multiline
                maxRows={4}
                placeholder='Напишитe здесь Ваш отзыв...'
                sx={{ width: '50%' }}
            />
            <Button variant='contained' sx={{ backgroundColor: '#26a9e0', mt: 2 }}>
                опубликовать
            </Button>
        </Container>
    )
}

export default NewCommentForm
