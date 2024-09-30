const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: [true, "user id required"],
    },
    title: {
        type: String,
        required: [true, "title is required"]
    },
    priority:{
        type: String,
        enum: ['Low','Medium','High'],
        default: 'Medium',
    },
    status:{
        type: String,
        enum: ['Todo', "Doing", "Done"],
        default: "Todo"
    },
},{timestamps:true});


const todo = mongoose.model('todo', todoSchema);
module.exports = todo;