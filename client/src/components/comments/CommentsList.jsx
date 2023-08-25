import React from 'react'
import { Container } from '@mui/material'
import Comment from './Comment.jsx'

function CommentsList() {
    return (
        <Container maxWidth='lg' sx={{ mt: 4 }}>
            <Comment />
        </Container>
    )
}

export default CommentsList
