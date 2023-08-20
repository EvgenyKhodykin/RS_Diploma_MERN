import User from '../models/User.js'

export async function patchSingleUserHandler(request, response) {
    try {
        const { userId } = request.params

        if (userId === request.user._id) {
            const updatedUser = await User.findByIdAndUpdate(userId, request.body, {
                new: true
            })
            response.send(updatedUser)
        } else {
            response.status(401).json({ message: 'Unauthorized' })
        }
    } catch (error) {
        response.status(500).json({ message: 'Server error. Try again later' })
    }
}

export async function getUsersHandler(request, response) {
    try {
        const list = await User.find()
        response.status(200).send(list)
    } catch (error) {
        response.status(500).json({ message: 'Server error. Try again later' })
    }
}
