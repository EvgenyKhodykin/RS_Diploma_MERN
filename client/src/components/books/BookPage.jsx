import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { orderBy } from 'lodash'
import {
    Badge,
    Box,
    Button,
    CardMedia,
    Container,
    Paper,
    Typography
} from '@mui/material'
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
import ModalWindow from '../UI/ModalWindow.jsx'
import BuyBookmarkButtons from '../UI/BuyBookmarkButtons.jsx'
import EmptyCommentsList from '../comments/EmptyCommentsList.jsx'

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

    console.log(comments)

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
                            height: 450,
                            justifyContent: 'space-between'
                        }}
                    >
                        <CardMedia
                            image={currentBook.cover}
                            component='img'
                            alt={currentBook.currentBookname}
                            title={currentBook.name}
                            sx={{
                                objectFit: 'contain',
                                width: '30%',
                                borderRadius: '2px'
                            }}
                        />
                        <Paper
                            elevation={3}
                            sx={{
                                ml: 5,
                                p: 1,
                                width: '65%',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Typography variant='h6' sx={{ textAlign: 'center', mt: 1 }}>
                                {currentBook.name}
                            </Typography>
                            <Box>
                                <Typography variant='body2'>Автор:</Typography>
                                <Typography variant='body1' sx={{ color: 'grey' }}>
                                    {currentBook.author}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='body2'>Жанр:</Typography>
                                <Typography variant='body1' sx={{ color: 'grey' }}>
                                    {currentBook.category}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='body2'>Стоимость:</Typography>
                                <Typography variant='h6' sx={{ color: 'red' }}>
                                    {currentBook.price} &#8381;
                                </Typography>
                            </Box>

                            <BuyBookmarkButtons bookId={currentBook._id} />
                        </Paper>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Typography variant='body1' sx={{ textAlign: 'justify', px: 1 }}>
                            {currentBook.description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            maxWidth: 'lg',
                            mt: 7,
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
                    {comments.length > 0 ? (
                        <CommentsList
                            comments={sortedComments}
                            onRemove={handleRemoveComment}
                        />
                    ) : (
                        <EmptyCommentsList />
                    )}
                </Container>
            </>
        )
    }
    return <Loading />
}

export default BookPage
