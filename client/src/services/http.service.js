import axios from 'axios'
import { toast } from 'react-toastify'
import localStorageService from './localStorage.service'
import authService from './auth.service'

const http = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT
})

http.interceptors.request.use(
    async function (config) {
        const expiresDate = localStorageService.getTokenExpiresDate()
        const refreshToken = localStorageService.getRefreshToken()
        const isExpired = refreshToken && expiresDate < Date.now()

        if (isExpired) {
            const data = await authService.refreshToken()
            localStorageService.setTokens(data)
        }
        const accessToken = localStorageService.getAccessToken()
        if (accessToken) {
            config.headers = {
                ...config.headers,
                authorization: `Bearer ${accessToken}`
            }
        }

        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    response => {
        response.data = { content: response.data }
        return response
    },
    function expError(error) {
        const expectedErrors =
            error.response && error.response.status >= 400 && error.response.status < 500

        if (!expectedErrors) {
            toast.error('Something wrong...')
        }
        return Promise.reject(error)
    }
)

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch
}

export default httpService
