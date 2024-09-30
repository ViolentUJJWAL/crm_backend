const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    link: {
        type: String,
        required: [true, "link is required"]
    },
    teamJoin: {
        type: String,
        enum: ["devaloper", "marketing", "both"],
        required: [true, "teamJoin is required"],
    },
    dateTime: {
        type: Date,
        required: [true, "meeting date is required"],
    },
    status:{
        type: String,
        enum: ['pending', "deley", "done"],
        default: "pending"
    },
}, {timestamps:true});


const meeting = mongoose.model('meeting', meetingSchema);
module.exports = meeting;