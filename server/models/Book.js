import { Schema, model } from 'mongoose'

const schema = new Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        cover: { type: String },
        description: { type: String },
        rate: { type: Number },
        price: { type: Number }
    },
    {
        timestamps: true
    }
)

export default model('Book', schema)
