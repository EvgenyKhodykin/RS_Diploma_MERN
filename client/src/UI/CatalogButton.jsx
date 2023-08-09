import { React, useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import API from '../api'

export default function CatalogButton() {
    const [anchorEl, setAnchorEl] = useState(null)
    // const [currentCategory, setCurrentCategory] = useState('Вся литература')
    const open = Boolean(anchorEl)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = target => {
        setAnchorEl(null)
        // setCurrentCategory(target.innerText)
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
                {API.categories.map(category => (
                    <MenuItem
                        key={category}
                        onClick={handleClose}
                    >
                        {category}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}
