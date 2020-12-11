const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('Todo', TodoSchema);