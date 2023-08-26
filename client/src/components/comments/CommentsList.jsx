import React from 'react'
import { Container } from '@mui/material'
import Comment from './Comment.jsx'

function CommentsList({ comments, onRemove }) {
    return (
        <Container maxWidth='lg' sx={{ mt: 4 }}>
            {comments.map(comment => (
                <Comment key={comment._id} {...comment} onRemove={onRemove} />
            ))}
        </Container>
    )
}

export default CommentsList
