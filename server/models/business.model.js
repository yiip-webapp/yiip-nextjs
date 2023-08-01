const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    industry: {
        type: String,
        required: [
            true,
            "Every business specializes in an industry!"
        ]
    },
    name: {
        type: String,
        required: [
            true,
            "Every business has a name!"
        ]
    },
    address: {
        type: String,
        required: [
            true,
            "Every business has a location! (If it's an online business, put online.)"
        ]
    },
    phone: {
        type: String,
        required: [
            true,
            "Every business has a phone number!"
        ]
    },
    hours: {
        type: String,
        required: [
            true,
            "Every business has business hours!"
        ]
    },
    service: {
        type: String,
        required: [
            true,
            "Every business offers a product/service!"
        ]
    }
}, {timestamps: true});


const Business = mongoose.model('Business', BusinessSchema)
module.exports = Business
// I did change this part from Julie's original; maybe revert to original if this doesn't work