import React, { useState } from 'react'
import { Container } from '@mui/material'
// import Snack from '../../UI/SnackBar'
import { useSelector } from 'react-redux'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BooksList from '../books/BooksList.jsx'
import Snack from '../UI/Snackbar.jsx'
import Loading from '../UI/Loading.jsx'
// import { setSelectedCategory } from '../../redux/slices/selectCategory.slice.js'
// import { getSelectedCategory } from '../../redux/selectors/selectCategory.selectors.js'

function MainPage() {
    const books = useSelector(getBooks)
    // const dispatch = useDispatch()
    // const selectedCategory = useSelector(getSelectedCategory)
    const [isSnackOpen, setSnackOpen] = useState(false)
    const [snackText, setSnackText] = useState('')

    // const filteredBooks = books.filter(book => book.category === selectedCategory)

    // useEffect(() => {
    //     dispatch(setSelectedCategory(null))
    // }, [selectedCategory])

    const handleBuyClick = id => {
        setSnackOpen(true)
        setSnackText('Товар добавлен в корзину')
    }

    const handleBookmarkClick = id => {
        setSnackOpen(true)
        setSnackText('Товар добавлен в избранное')
        // setBooks(
        //     books.map(book => {
        //         if (book.id === id) {
        //             return {
        //                 ...book,
        //                 isBookmarked: !book.isBookmarked
        //             }
        //         }
        //         return book
        //     })
        // )
    }

    if (books) {
        return (
            <>
                <Container
                    sx={{
                        maxWidth: 'xl',
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <BooksList
                        handleBuyClick={handleBuyClick}
                        handleBookmarkClick={handleBookmarkClick}
                        books={books}
                    />
                </Container>
                <Snack
                    isOpen={isSnackOpen}
                    handleClose={() => setSnackOpen(false)}
                    text={snackText}
                />
            </>
        )
    }

    return <Loading />
}

export default MainPage
