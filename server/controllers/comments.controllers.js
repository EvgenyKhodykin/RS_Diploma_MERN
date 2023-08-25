import Comment from '../models/Comment.js'

export async function getCommentsHandler(request, response) {
    try {
        const { orderBy, equalTo } = request.query
        const list = await Comment.find({ [orderBy]: equalTo })
        response.send(list)
    } catch (error) {
        response.status(500).json({ message: 'Server error. Can not get comments' })
    }
}

export async function postCommentHandler(request, response) {
    try {
        const newComment = await Comment.create({
            ...request.body,
            userId: request.user._id
        })

        response.status(201).send(newComment)
    } catch (error) {
        response.status(500).json({ message: 'Server error. Can not create a comment' })
    }
}

export async function deleteCommentHandler(request, response) {
    try {
        const { commentId } = request.params
        console.log(commentId)
        const removedComment = await Comment.findById(commentId)

        if (removedComment.userId.toString() === request.user._id) {
            await removedComment.deleteOne()
            return response.send(null)
        } else {
            return response.status(401).json({ message: 'Unauthorized' })
        }
    } catch (error) {
        response.status(500).json({ message: 'Server error. Can not delete a comment' })
    }
}
