import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { getCategories } from '../../redux/selectors/categories.selectors.js'

export default function CatalogButton() {
    const categories = useSelector(getCategories)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
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
                        <MenuItem key={category._id} onClick={handleClose}>
                            {category.name}
                        </MenuItem>
                    ))}
            </Menu>
        </div>
    )
}
