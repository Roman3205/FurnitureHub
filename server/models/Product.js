import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
    },
    price: {
        type: Number,
        required: true,
        min: 10000,
        max: 70000
    },
}, {
    timestamps: true
})

export default mongoose.model('product', productSchema)