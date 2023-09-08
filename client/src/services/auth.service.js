import axios from 'axios'
import localStorageService from './localStorage.service'

const httpAuth = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT + '/auth/'
})

const authService = {
    register: async payload => {
        const { data } = await httpAuth.post('signUp', payload)
        return data
    },
    logIn: async ({ email, password }) => {
        const { data } = await httpAuth.post('signInWithPassword', {
            email,
            password,
            returnSecureToken: true
        })
        return data
    },
    refreshToken: async () => {
        const { data } = await httpAuth.post('token', {
            grant_type: 'refresh_token',
            refresh_token: localStorageService.getRefreshToken()
        })
        return data
    }
}

export default authService
