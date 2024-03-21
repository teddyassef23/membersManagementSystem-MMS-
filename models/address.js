

const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');

const address = new mongoose.Schema({
    street1: {
        type: String,
        required: true
    },
    street2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false
    },
    zip: {
        type: INTEGER,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    students: [
        {
          type: Schema.Types.ObjectId,
          ref: 'members',
        },
      ],

});

module.exports = address;