
const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');

const membership_fee_election = new mongoose.Schema({
    id: {
        type: INTEGER,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    endDate: {
        type: data,
        required: true,
       
    },

    membership_fee_id: {
        type: INTEGER,
        required: false
    },


    students: [
        {
          type: Schema.Types.ObjectId,
          ref: 'members',
        },
      ],

});

module.exports= membership_fee_election;