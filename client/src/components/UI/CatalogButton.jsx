import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuItem, Button, Box } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import MenuIcon from '@mui/icons-material/Menu'
import { getCategories } from '../../redux/selectors/categories.selectors.js'

export default function CatalogButton() {
    const categories = useSelector(getCategories)
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const mobileSize = useMediaQuery('(min-width:500px)')

    const handleListOpen = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleCategoryClick = id => {
        setAnchorEl(null)
        navigate(`books/categories/${id}`)
    }

    return (
        <Box>
            <Button
                variant='contained'
                size='large'
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                sx={{ color: 'white', height: 40 }}
                onClick={handleListOpen}
            >
                {mobileSize && 'Каталог'}
                {<MenuIcon sx={{ marginLeft: 1 }} />}
            </Button>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                {categories &&
                    categories.map(category => (
                        <MenuItem
                            key={category._id}
                            label={category.name}
                            onClick={() => handleCategoryClick(category._id)}
                        >
                            {category.name}
                        </MenuItem>
                    ))}
            </Menu>
        </Box>
    )
}
