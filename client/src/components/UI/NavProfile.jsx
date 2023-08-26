import React, { useState } from 'react'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Link } from 'react-router-dom'

function NavProfile({ user }) {
    const currentUser = user
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    if (currentUser) {
        return (
            <>
                <Button onClick={handleClick}>
                    <Avatar
                        alt={currentUser.name}
                        src={currentUser.image}
                        sx={{ height: 50 }}
                    />
                    <ArrowDropDownIcon sx={{ color: 'white' }} />
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
                    <Link to={`/user/${currentUser._id}`}>
                        <MenuItem onClick={handleClose}>Профиль</MenuItem>
                    </Link>
                    <Link to='/logout'>
                        <MenuItem>Выйти</MenuItem>
                    </Link>
                </Menu>
            </>
        )
    }
    return 'Loading'
}

export default NavProfile
