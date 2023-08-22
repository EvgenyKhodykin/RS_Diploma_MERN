import httpService from './http.service'

const booksEndPoint = 'books/'

const booksService = {
    fetchAll: async () => {
        const { data } = await httpService.get(booksEndPoint)
        return data
    }
}

export default booksService
