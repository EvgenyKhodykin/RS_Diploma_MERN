import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataStatus } from '../../../store/users/selectors'
import Loading from '../Loading'
import { loadUsersList } from '../../../store/users/slice'

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
