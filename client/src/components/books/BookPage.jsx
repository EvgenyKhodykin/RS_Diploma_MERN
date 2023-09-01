import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { orderBy } from 'lodash'
import { Badge, Box, Button, Container, Paper, Typography } from '@mui/material'
import { getBookById } from '../../redux/selectors/books.selectors.js'
import Loading from '../UI/Loading.jsx'
import NewCommentForm from '../comments/NewCommentForm.jsx'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'
import {
    createComment,
    loadCommentsList,
    removeComment
} from '../../redux/slices/comments.slice.js'
import CommentsList from '../comments/CommentsList.jsx'
import { getComments } from '../../redux/selectors/comments.selectors.js'
import BookCard from './BookCard.jsx'
import ModalWindow from '../UI/ModalWindow.jsx'

function BookPage() {
    const dispatch = useDispatch()
    const { bookId } = useParams()
    const isLoggedIn = useSelector(getIsLoggedIn)
    const currentBook = useSelector(getBookById(bookId))
    const currentUserId = null
    const comments = useSelector(getComments)
    const sortedComments = orderBy(comments, ['created_at'], ['desc'])
    const [formIsVisible, setFormIsVisible] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalText, setModalText] = useState('')

    useEffect(() => {
        dispatch(loadCommentsList(bookId))
    }, [bookId])

    const handleCommentClick = () => {
        if (isLoggedIn) {
            if (!formIsVisible) setFormIsVisible(true)
            setFormIsVisible(!formIsVisible)
        } else {
            setIsModalOpen(true)
            setModalText('Чтобы оставить отзыв нужна авторизация!')
        }
    }

    const handleSubmit = data => {
        const newComment = {
            ...data,
            bookId,
            userId: currentUserId
        }
        dispatch(createComment(newComment))
        setFormIsVisible(false)
    }

    const handleRemoveComment = id => {
        dispatch(removeComment(id))
    }

    const handleModalClose = () => setIsModalOpen(false)

    if (currentBook) {
        return (
            <>
                <ModalWindow
                    isOpen={isModalOpen}
                    text={modalText}
                    onClose={handleModalClose}
                />
                <Container maxWidth='lg' sx={{ mt: 7 }}>
                    <Box
                        maxWidth='lg'
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <BookCard {...currentBook} location={'booksList'} />
                        <Paper
                            sx={{
                                ml: 5,
                                mt: 1,
                                p: 1,
                                width: '65%',
                                height: 480,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Typography
                                variant='h6'
                                sx={{ textAlign: 'center', mt: 9, mb: 9 }}
                            >
                                {currentBook.name}
                            </Typography>
                            <Typography variant='body2'>Автор:</Typography>
                            <Typography variant='body1' sx={{ color: 'grey' }}>
                                {currentBook.author}
                            </Typography>
                            <Typography variant='body2' sx={{ mt: 3 }}>
                                Жанр:
                            </Typography>
                            <Typography variant='body1' sx={{ color: 'grey' }}>
                                {currentBook.category}
                            </Typography>
                        </Paper>
                    </Box>
                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography variant='body1'>{currentBook.description}</Typography>
                    </Box>
                    <Box
                        sx={{
                            maxWidth: 'lg',
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Badge badgeContent={comments.length} color='secondary'>
                                <Typography variant='h3'>отзывы</Typography>
                            </Badge>

                            <Button
                                variant='contained'
                                size='large'
                                sx={{ height: 40, ml: 5 }}
                                onClick={handleCommentClick}
                            >
                                Оставить отзыв
                            </Button>
                        </Box>
                    </Box>
                    {formIsVisible && <NewCommentForm onSubmit={handleSubmit} />}
                    <CommentsList
                        comments={sortedComments}
                        onRemove={handleRemoveComment}
                    />
                </Container>
            </>
        )
    }
    return <Loading />
}

export default BookPage
