import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, InputBase, List } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { getBooks } from '../../redux/selectors/books.selectors.js'
import { useNavigate } from 'react-router-dom'
import BookSearchCard from '../books/BookSearchCard.jsx'

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const books = useSelector(getBooks)
    const navigate = useNavigate()
    const mobileSize = useMediaQuery('(min-width:1024px)')

    const handleSearch = event => {
        if (event.target.value !== ' ' && event.target.value !== '.') {
            setSearchValue(event.target.value)
        }
    }

    const handleListClick = id => {
        navigate(`books/${id}`)
        setSearchValue('')
    }

    const filteredBooks = searchValue
        ? books.filter(book =>
              book.name.toLowerCase().includes(searchValue.toLowerCase().trim())
          )
        : null

    if (mobileSize) {
        return (
            <>
                <InputBase
                    sx={{
                        display: 'flex',
                        backgroundColor: 'white',
                        borderRadius: 1,
                        height: '100%',
                        width: 400,
                        ml: 2,
                        px: 2,
                        color: 'gray'
                    }}
                    placeholder='Что будем искать?'
                    type='text'
                    onChange={handleSearch}
                    value={searchValue}
                />
                {filteredBooks && filteredBooks.length > 0 && (
                    <Box
                        sx={{
                            width: 600,
                            top: 100,
                            left: '33%',
                            p: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'absolute',
                            zIndex: 1,
                            backgroundColor: 'white',
                            borderRadius: 1,
                            boxShadow: '0 0 8px grey'
                        }}
                    >
                        <List>
                            {filteredBooks.map(book => (
                                <BookSearchCard
                                    key={book._id}
                                    {...book}
                                    onClick={() => handleListClick(book._id)}
                                />
                            ))}
                        </List>
                    </Box>
                )}
            </>
        )
    }
}

export default Search
