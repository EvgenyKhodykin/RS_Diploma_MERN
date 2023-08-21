import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { getCategories } from '../../redux/selectors/categories.selectors.js'
import { setSelectedCategory } from '../../redux/slices/selectCategory.slice.js'

export default function CatalogButton() {
    const categories = useSelector(getCategories)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = event => {
        setAnchorEl(null)
        dispatch(setSelectedCategory(event.currentTarget.getAttribute('label')))
    }

    return (
        <div>
            <Button
                variant='contained'
                size='large'
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                sx={{ color: 'white' }}
                onClick={handleClick}
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
                            onClick={handleClose}
                        >
                            {category.name}
                        </MenuItem>
                    ))}
            </Menu>
        </div>
    )
}
