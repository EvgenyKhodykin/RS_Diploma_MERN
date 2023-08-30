import { Schema, model } from 'mongoose'

const schema = new Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        image: { type: String },
        sex: { type: String, enum: ['Мужской', 'Женский'] }
    },
    {
        timestamps: true
    }
)

export default model('User', schema)
