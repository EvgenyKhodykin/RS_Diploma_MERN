import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { getIsLoggedIn, getUsersLoadingStatus } from '../../../store/users/selectors'
import PropTypes from 'prop-types'
import { loadBooksList } from '../../redux/slices/books.slice.js'
import { loadCategoriesList } from '../../redux/slices/categories.slice.js'
// import Loading from '../Loading'
// import { loadUsersList } from '../../../store/users/slice'

function AppLoader({ children }) {
    const dispatch = useDispatch()
    // const isLoggedIn = useSelector(getIsLoggedIn)
    // const usersStatusLoading = useSelector(getUsersLoadingStatus)

    useEffect(() => {
        dispatch(loadBooksList)
        dispatch(loadCategoriesList)
    }, [])

    // if (usersStatusLoading) return <Loading />
    return children
}

AppLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default AppLoader
