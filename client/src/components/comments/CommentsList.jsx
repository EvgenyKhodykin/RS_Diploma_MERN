import React from 'react'
import { Box } from '@mui/material'
import Comment from './Comment.jsx'

function CommentsList({ comments, onRemove }) {
    return (
        <Box sx={{ mt: 4 }}>
            {comments.map(comment => (
                <Comment key={comment._id} {...comment} onRemove={onRemove} />
            ))}
        </Box>
    )
}

export default CommentsList
