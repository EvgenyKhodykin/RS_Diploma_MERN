import httpService from './http.service'

const commentEndPoint = 'comments/'

const commentsService = {
    createComment: async payload => {
        const { data } = await httpService.post(commentEndPoint, payload)
        return data
    },
    getComments: async bookId => {
        const { data } = await httpService.get(commentEndPoint, {
            params: {
                orderBy: 'bookId',
                equalTo: `${bookId}`
            }
        })
        return data
    },
    removeComment: async id => {
        const { data } = await httpService.delete(commentEndPoint + id)
        return data
    }
}

export default commentsService
