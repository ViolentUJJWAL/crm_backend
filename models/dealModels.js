const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "user is required"],
    },
    dealName: {
        type: String,
        required: [true, "dealName is required"],
    },
    companyName: {
        type: String,
        required: [true, "companyName is required"],
    },
    contactName: {
        type: String,
        required: [true, "contactName is required"]
    },
    amount:{
        type: Number,
        required: [true, "amount is required"]
    },
    description:{
        type: String,
        required: [true, 'description is required'],
    },
    stage:{
        type: String,
        enum: ['Qualification', "Need Analysis", "Proposal/Price Quote", "Negotiation/Review", "Closed Won", "Closed Lost"],
        default: "Qualification"
    },
},{timestamps:true});


const deal = mongoose.model('deal', dealSchema);
module.exports = deal;