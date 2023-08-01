const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    industry: {
        type: String,
        required: [
            true,
            "Every business specializes in an industry!"
        ],
        minLength : [3, "This must be at least three characters long."]
    },
    name: {
        type: String,
        required: [
            true,
            "Every business has a name!"
        ],
        minLength : [3, "This must be at least three characters long."]
    },
    address: {
        type: String,
        required: [
            true,
            "Every business has a location! (If it's an online business, put online.)"
        ],
        minLength : [3, "This must be at least three characters long."]
    },
    phone: {
        type: String,
        required: [
            true,
            "Every business has a phone number!"
        ],
        minLength : [3, "This must be at least three characters long."]
    },
    hours: {
        type: String,
        required: [
            true,
            "Every business has business hours!"
        ],
        minLength : [3, "This must be at least three characters long."]
    },
    service: {
        type: String,
        required: [
            true,
            "Every business offers a product/service!"
        ],
        minLength : [3, "This must be at least three characters long."]
    }
}, {timestamps: true});


const Business = mongoose.model('Business', BusinessSchema)
module.exports = Business
// I did change this part from Julie's original; maybe revert to original if this doesn't work