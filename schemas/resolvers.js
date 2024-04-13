const { Member, MemberFamily, Payment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getMember: async (parent, { memberId }) => {
      try {
        return await Member.findById(memberId);
      } catch (error) {
        console.error('Error fetching member:', error);
        throw new Error('Failed to fetch member.');
      }
    },
    getAllMembers: async () => {
      try {
        return await Member.find();
      } catch (error) {
        console.error('Error fetching members:', error);
        throw new Error('Failed to fetch members.');
      }
    }
  },
  Mutation: {
    addMember: async (parent, { memberInput }) => {
      try {
        return await Member.create(memberInput);
      } catch (error) {
        console.error('Error creating member:', error);
        throw new Error('Failed to create member.');
      }
    },
    updateMember: async (parent, { memberId, memberInput }) => {
      try {
        return await Member.findByIdAndUpdate(memberId, memberInput, { new: true });
      } catch (error) {
        console.error('Error updating member:', error);
        throw new Error('Failed to update member.');
      }
    },
    deleteMember: async (parent, { memberId }) => {
      try {
        return await Member.findByIdAndDelete(memberId);
      } catch (error) {
        console.error('Error deleting member:', error);
        throw new Error('Failed to delete member.');
      }
    }
  },
  Member : {payments: async (parent)=> {try{ 
    return await payment.find ({_id: {$in:parent.payments}});
      } catch (error) {
        console.error('Error deleting member:', error);
        throw new Error('Failed to delete member.');
      }
    }

    
  }};
  module.exports= resolvers;
