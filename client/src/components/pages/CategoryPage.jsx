import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { getCategories } from '../../redux/selectors/categories.selectors.js'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import BooksList from '../books/BooksList.jsx'

function CategoryPage() {
    const { categoryId } = useParams()
    const categories = useSelector(getCategories)
    const books = useSelector(getBooks)
    const currentCategory = categories?.filter(category => category._id === categoryId)[0]
    const currentBookList = books?.filter(book => book.category === currentCategory.name)
    document.title = currentCategory.name

    if (books && currentBookList) {
        return (
            <>
                <Typography variant='h3' sx={{ mt: 8 }}>
                    {currentCategory.name.toUpperCase()}
                </Typography>
                <BooksList books={currentBookList} />
            </>
        )
    }
}

export default CategoryPage
