import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

function NewCommentForm({ onSubmit }) {
    const [comment, setComment] = useState({})
    const [textValue, setTextValue] = useState('')

    const handleTextChange = ({ target }) => {
        setTextValue(target.value)
        setComment(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        setTextValue('')
        onSubmit(comment)
    }

    const enterPressHandler = event => {
        if (event.key === 'Enter') {
            handleSubmit(event)
        }
    }

    return (
        <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}
        >
            <TextField
                multiline
                required
                name='content'
                value={textValue}
                onChange={handleTextChange}
                onKeyDown={enterPressHandler}
                maxRows={4}
                placeholder='Напишитe здесь Ваш отзыв...'
                sx={{ width: '50%' }}
            />
            <Button
                variant='contained'
                sx={{ backgroundColor: '#26a9e0', mt: 2 }}
                type='submit'
            >
                опубликовать
            </Button>
        </Box>
    )
}

export default NewCommentForm
