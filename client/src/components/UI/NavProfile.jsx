import React from 'react'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../../redux/selectors/users.selectors.js'

function NavProfile() {
    const currentUser = useSelector(getCurrentUser)
    console.log(currentUser)

    if (currentUser) {
        return <Avatar alt={currentUser.name} src={currentUser.image} />
    }
    return 'Loading'
}

export default NavProfile
