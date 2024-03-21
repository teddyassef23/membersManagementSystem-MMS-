const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');

const relationship_lookup = new mongoose.Schema({
    id: {
        type: INTEGER,
        required: true
    },
    relationship: {
        type: String,
        required: false
    }

});

module.exports = relationship_lookup;