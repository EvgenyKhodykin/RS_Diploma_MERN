import React from 'react'
import { Container, TextField } from '@mui/material'

function Search() {
    return (
        <Container sx={{ mb: 2, width: 500, color: 'white' }}>
            <TextField
                fullWidth
                label='Я ищу...'
                variant='standard'
                type='search'
                size='small'
            />
        </Container>
    )
}

export default Search
