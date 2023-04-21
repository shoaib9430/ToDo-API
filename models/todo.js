const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "pending",
        },
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;