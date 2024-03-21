const mongoose = require('mongoose');
const { INTEGER, STRING, DATE } = require('sequelize');

const membersFamily = new mongoose.Schema({
    id: {
        type: INTEGER,
        required: true
    },
    firstName: {
        type: STRING,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
 
    baptismalName: {
        type: STRING,
        required: true
    },

    relationShip: {
        type: STRING,
        required: true
    },
    createdDate: {
        type: DATE,
        required: true,
        default: Date.now,
    },
  

});
module.exports= membersFamily

