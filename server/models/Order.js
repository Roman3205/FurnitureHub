import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product'
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    parcelNumber: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('order', orderSchema)