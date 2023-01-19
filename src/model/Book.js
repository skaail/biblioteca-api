const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    year: {
        type: String
    },

    author: {
        type: String,
        required: true
    },

    isAvalible: Boolean,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Book', Schema)