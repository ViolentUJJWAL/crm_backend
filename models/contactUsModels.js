const mongoose = require("mongoose")

const contactUsShcema = new mongoose.Schema({
    name: {
        type: String,
        required :[true, "Name is required"],
    },
    email: {
        type: String,
        required : [true, "E-Mail is required"],
    },
    subject: {
        type: String,
        required: [true, "subject is required"]
    },
    message: {
        type: String,
        required: [true, "Message is required"]
    },
}, {timestamps:true})

const contactUsModule = mongoose.model("contectUs", contactUsShcema)

module.exports = contactUsModule