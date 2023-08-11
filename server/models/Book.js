import { Schema, model } from 'mongoose'

const schema = new Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        poster: {
            data: Buffer,
            contentType: String
        },
        rate: { type: Number },
        price: { type: Number }
    },
    {
        timestamps: true
    }
)

export default model('Book', schema)
