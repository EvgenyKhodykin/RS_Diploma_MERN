import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import { Menu, MenuItem, Button, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { getCategories } from '../../redux/selectors/categories.selectors.js'
import { useNavigate } from 'react-router-dom'

export default function CatalogButton() {
    const categories = useSelector(getCategories)
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

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
                sx={{ color: 'white' }}
                onClick={handleListOpen}
            >
                Каталог
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
