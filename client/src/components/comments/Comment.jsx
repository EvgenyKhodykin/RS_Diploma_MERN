/* eslint-disable camelcase */
import React from 'react'
import { Box, Button, CardMedia, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useSelector } from 'react-redux'
import getCommentDate from '../../utils/getCommentDate.js'
import {
    getCurrentUserId,
    getIsLoggedIn,
    getUsersList
} from '../../redux/selectors/users.selectors.js'
import Loading from '../UI/Loading.jsx'

function Comment({ _id, created_at, content, userId, onRemove }) {
    const usersList = useSelector(getUsersList)
    const isLoggedIn = useSelector(getIsLoggedIn)
    const currentUserId = isLoggedIn ? useSelector(getCurrentUserId) : null
    const currentUser = usersList?.find(user => user._id === currentUserId)
    const commentAuthor = usersList?.find(user => user._id === userId)

    if (commentAuthor) {
        return (
            <Paper
                sx={{
                    backgroundColor: '#e3f9e1',
                    mb: 4,
                    p: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Box sx={{ display: 'flex' }}>
                    <CardMedia
                        image={commentAuthor.image}
                        component='img'
                        alt={commentAuthor.name}
                        title={commentAuthor.name}
                        sx={{ height: 70, width: 70, objectFit: 'contain' }}
                    />
                    <Box
                        sx={{
                            ml: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around'
                        }}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <Typography color='primary' sx={{ mr: 1 }}>
                                {commentAuthor.name}
                            </Typography>
                            <Typography color='secondary' sx={{ ml: 1 }}>
                                {getCommentDate(new Date(created_at))}
                            </Typography>
                        </Box>
                        <Box>{content}</Box>
                    </Box>
                </Box>
                {isLoggedIn && currentUser._id === userId && (
                    <Button onClick={() => onRemove(_id)}>
                        <DeleteIcon color='primary' />
                    </Button>
                )}
            </Paper>
        )
    }
    return <Loading />
}

export default Comment
