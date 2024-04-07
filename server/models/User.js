import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 12,
        minLength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 32,
        minLength: 5
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    isSubscribed: {
        type: Boolean,
        required: true
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart'
    },
    avatar: {
        type: String,
        default: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-1024.png'
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'order'
        }
    ]
}, {
    timestamps: true
})

export default mongoose.model('user', userSchema)