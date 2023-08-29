import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { orderBy } from 'lodash'
import {
    Badge,
    Box,
    Button,
    Card,
    CardMedia,
    Container,
    Paper,
    Typography
} from '@mui/material'
import { getBookById } from '../../redux/selectors/books.selectors.js'
import Loading from '../UI/Loading.jsx'
import BuyBookmarkButtons from '../UI/BuyBookmarkButtons.jsx'
import NewCommentForm from '../comments/NewCommentForm.jsx'
import { getIsLoggedIn } from '../../redux/selectors/users.selectors.js'
import {
    createComment,
    loadCommentsList,
    removeComment
} from '../../redux/slices/comments.slice.js'
import CommentsList from '../comments/CommentsList.jsx'
import {
    getComments,
    getCommentsLoadingStatus
} from '../../redux/selectors/comments.selectors.js'

function BookPage() {
    const dispatch = useDispatch()
    const { bookId } = useParams()
    const isLoggedIn = useSelector(getIsLoggedIn)
    const currentBook = useSelector(getBookById(bookId))
    const isLoading = useSelector(getCommentsLoadingStatus)
    const currentUserId = null
    const comments = useSelector(getComments)
    const sortedComments = orderBy(comments, ['created_at'], ['desc'])

    const [formIsVisible, setFormIsVisible] = useState(false)

    useEffect(() => {
        dispatch(loadCommentsList(bookId))
    }, [bookId])

    const handleCommentClick = () => {
        if (isLoggedIn) {
            if (!formIsVisible) setFormIsVisible(true)
            setFormIsVisible(!formIsVisible)
        } else {
            return alert('Чтобы оставить отзыв нужна авторизация!')
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

    if (currentBook) {
        return (
            <Container maxWidth='xl'>
                <Container
                    maxWidth='lg'
                    sx={{
                        mt: 8,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Card>
                        <CardMedia
                            image={currentBook.cover}
                            component='img'
                            alt={currentBook.name}
                            title={currentBook.name}
                            sx={{ height: 500, objectFit: 'contain' }}
                        />
                    </Card>
                    <Paper
                        elevation={1}
                        sx={{
                            marginLeft: 5,
                            width: '35%',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography
                            variant='h6'
                            sx={{ textAlign: 'center', marginBottom: 6 }}
                        >
                            {currentBook.name}
                        </Typography>
                        <Typography>{currentBook.author}</Typography>
                        <Typography variant='h4' sx={{ color: 'red', marginTop: 6 }}>
                            {currentBook.price} &#8381;
                        </Typography>
                        <BuyBookmarkButtons bookId={bookId} />
                    </Paper>
                </Container>
                <Container
                    sx={{
                        maxWidth: 'lg',
                        mt: 4,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography variant='body1'>{currentBook.description}</Typography>
                </Container>
                <Container
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
                </Container>
                {formIsVisible && <NewCommentForm onSubmit={handleSubmit} />}
                {!isLoading && (
                    <CommentsList
                        comments={sortedComments}
                        onRemove={handleRemoveComment}
                    />
                )}
            </Container>
        )
    }
    return <Loading />
}

export default BookPage
