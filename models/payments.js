const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');

const payments = new mongoose.Schema({
    street1: {
        type: String,
        required: true
    },
    membership_fee_election_id: {
        type: String,
        required: false
    },
    amount: {
        type: INTEGER,
        required: false
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    payment_type: {
        type: String,
        required: true
    },
    created_date: {
        type: date,
        required: true,
        default: Date.now,
    },
    members: [membersSchema],
    
    students: [
        {
          type: Schema.Types.ObjectId,
          ref: 'members',
        },
      ],

});

module.exports = payments;