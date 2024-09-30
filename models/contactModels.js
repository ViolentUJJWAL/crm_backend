const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: [true, "user is required"],
    },
    contactName: {
        type: String,
        required: [true, "contactName is required"]
    },
    companyName: {
        type: String,
        required: [true, "companyName is required"],
    },
    email:{
        type: String,
        required: [true, "email is required"]
    },
    phoneNo:{
        type: String,
        required: [true, "phoneNo. is required"]
    },
}, {timestamps:true});


const contact = mongoose.model('contact', contactSchema);
module.exports = contact;