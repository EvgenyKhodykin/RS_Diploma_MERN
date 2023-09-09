import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { getCategories } from '../../redux/selectors/categories.selectors.js'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BooksList from '../books/BooksList.jsx'

function CategoryPage() {
    const { categoryId } = useParams()
    const categories = useSelector(getCategories)
    const books = useSelector(getBooks)
    const currentCategory = categories?.filter(category => category._id === categoryId)[0]
    const currentBookList = books?.filter(book => book.category === currentCategory.name)
    document.title = currentCategory?.name
    const mobileSize = useMediaQuery('(min-width:500px)')

    if (books && currentBookList) {
        return (
            <>
                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Typography variant={mobileSize ? 'h3' : 'h4'}>
                        {currentCategory.name.toUpperCase()}
                    </Typography>
                </Box>
                <BooksList books={currentBookList} />
            </>
        )
    }
}

export default CategoryPage
