import React from 'react'
import { CircularProgress, Container } from '@mui/material'

function Loading() {
    return (
        <Container
            maxWidth='xl'
            sx={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
        >
            <CircularProgress size={100} />
        </Container>
    )
}

export default Loading
