const { Schema, model } = require('mongoose')

const categorySchema = new Schema({

    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    parentId: {
        type: String
    }

}, { timestamps: true })

module.exports = new model('Category', categorySchema);