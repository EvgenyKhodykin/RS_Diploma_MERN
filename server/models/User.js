import { Schema, model } from 'mongoose'

const schema = new Schema(
    {
        nickName: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        image: { type: String },
        sex: { type: String, enum: ['male', 'female'] }
    },
    {
        timestamps: true
    }
)

export default model('User', schema)
