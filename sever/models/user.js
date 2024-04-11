
const mongoose = require('mongoose');


const usesSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    street2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    

});


module.exports = usesSchema;