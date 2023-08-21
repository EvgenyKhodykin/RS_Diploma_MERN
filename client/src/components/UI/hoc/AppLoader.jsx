import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { getIsLoggedIn, getUsersLoadingStatus } from '../../../store/users/selectors'
// import { loadBooksList } from '../redux/slices/books.slice.js'
import { loadBooksList } from '../../../redux/slices/books.slice.js'
import { loadCategoriesList } from '../../../redux/slices/categories.slice.js'

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

export default AppLoader
