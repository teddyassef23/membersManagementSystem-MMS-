const { Schema } = require('mongoose');
const membershipElectionSchema = require('./membershipElection')

const paymentSchema = new Schema({
  
    amount: {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: false
    },
    paymentDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    membershipElection: membershipElectionSchema,
  

});


module.exports = paymentSchema;