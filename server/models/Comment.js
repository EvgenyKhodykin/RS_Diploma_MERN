import { Schema, model } from 'mongoose'

const schema = new Schema(
    {
        content: { type: String, required: true },
        bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
    },
    {
        timestamps: { createdAt: 'created_at' }
    }
)

export default model('Comment', schema)
