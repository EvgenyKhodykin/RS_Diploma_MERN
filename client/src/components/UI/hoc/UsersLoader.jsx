import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'
import { getDataStatus } from '../../../redux/selectors/users.selectors.js'
import { loadUsersList } from '../../../redux/slices/users.slice.js'

function UsersLoader({ children }) {
    const dataStatus = useSelector(getDataStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!dataStatus) dispatch(loadUsersList)
    }, [])

    if (!dataStatus) return <Loading />
    return children
}

export default UsersLoader
