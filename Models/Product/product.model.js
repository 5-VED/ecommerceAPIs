const { Schema, model } = require('mongoose')

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        richDescription: {
            type: String,
            default: ""
        },
        image: [
            { img: { type: String } }
        ],
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        offer: {
            type: Number
        },
        rating: {
            type: String
        },
        reviews: [
            {
                type: { userId: Schema.Types.ObjectId },
                ref: 'users',
                review: String
            }
        ],
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required:true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required:true
        },
        updatedAt: {
            type: Date
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        deletedAt: {
            type: Date
        }

    }
)

const ProductModel = model('ProductModel', productSchema);
module.exports = ProductModel