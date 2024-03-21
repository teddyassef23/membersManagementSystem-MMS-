const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');

const membersSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: data,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdDate: {

    },
    primerPhone: {
        type: data,
        required: true
    },

    SecondaryPhone: {
        type: INTEGER,
        required: true
    },
    payment: [
        {
          type: Schema.Types.ObjectId,
          ref: 'payments',
        },
      ],
    address: [
        {
          type: Schema.Types.ObjectId,
          ref: 'address',
        },
      ],
      membershipFeeElection : [
        {
          type: Schema.Types.ObjectId,
          ref: 'membersFamily',
        },
      ],


});









// Uses mongoose.model() to create model
const members = mongoose.model('Member', membersSchema);



// seed
const membersData = [
    { startDate: '01-02-2024', startDate: '01-02-2024', city: 'Denver', state: Colorado, country: 'America', zip: 66231, },
    { startDate: '01-02-2024', startDate: '01-02-2024', city: 'Denver', state: Colorado, country: 'America', zip: 66231, },
    { startDate: '01-02-2024', startDate: '01-02-2024', city: 'Denver', state: Colorado, country: 'America', zip: 66231, },

];

members
    .create({ name: 'members', members: membersData })
    .then(data => console.log(data))
    .catch(err => console.log(err));

module.exports = membersSchema;
