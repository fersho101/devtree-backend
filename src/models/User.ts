import mongoose, { Schema } from 'mongoose'

interface IUser {
    name: string
    email: string
    password: string
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
})

const User = mongoose.model<IUser>('User', userSchema)
export default User
