const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');

const memberShipLookup = new mongoose.Schema({
    id: {
        type: INTEGER,
        required: true
    },
    amount:{
        type: INTEGER,
        required: true,
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

});

module.exports= memberShipLookup;