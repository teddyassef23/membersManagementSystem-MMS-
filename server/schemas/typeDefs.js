const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getMember(memberId: ID!): Member
    getAllMembers: [Member]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addMember(memberInput: MemberInput!): Member
    updateMember(memberId: ID!, memberInput: MemberInput!): Member
    deleteMember(memberId: ID!): Member
    login(email: String!, password: String!): AuthPayload!
  }
  type AuthPayload {
    token: String!
    user: Member!
  }
  type User {
    _id: ID
    username: String
    email: String
  }
  type Auth {
    token: String
    user: User
  }
  type Member {
    _id: ID!
    memberNumber: String!
    firstName: String!
    middleName: String
    lastName: String!
    baptismalName: String
    gender: String!
    startDate: String!
    endDate: String
    email: String
    primaryPhone: String
    secondaryPhone: String
    paymentFlag: Boolean
    created_date: String!
    membershipElections: [MembershipElection]
    addresses: [Address]
    memberFamilies: [MemberFamily]
  }
  input MemberInput {
    memberNumber: String!
    firstName: String!
    middleName: String
    lastName: String!
    baptismalName: String
    gender: String!
    startDate: String!
    endDate: String
    email: String
    primaryPhone: String
    secondaryPhone: String
    paymentFlag: Boolean
    membershipElections: [MembershipElectionInput]
    addresses: [AddressInput]
    memberFamilies: [MemberFamilyInput]
  }
  type Address {
    street: String!
    street2: String
    city: String!
    state: String!
    zip: Int!
    country: String!
    created_date: String!
  }
  input AddressInput {
    street: String!
    street2: String
    city: String!
    state: String!
    zip: Int!
    country: String!
    created_date: String!
  }
  type MemberFamily {
    id: ID!
    firstName: String!
    middleName: String
    lastName: String!
    baptismalName: String
    gender: String!
    relationShip: String!
    createdDate: String!
  }
  input MemberFamilyInput {
    id: ID!
    firstName: String!
    middleName: String
    lastName: String!
    baptismalName: String
    gender: String!
    relationShip: String!
    createdDate: String!
  }
  type MembershipElection {
    id: ID!
    startDate: String!
    endDate: String
    created_date: String!
    membership: Membership
  }
  input MembershipElectionInput {
    id: ID!
    startDate: String!
    endDate: String
    created_date: String!
    membership: MembershipInput
  }
  type Membership {
    id: ID!
    name: String!
    amount: Int!
    startDate: String!
    endDate: String
    created_date: String!
  }
  input MembershipInput {
    id: ID!
    name: String!
    amount: Int!
    startDate: String!
    endDate: String
    created_date: String!
  }
  type Payment {
    amount: Int!
    month: String!
    year: String!
    paymentMethod: String
    paymentDate: String!
    createdDate: String!
    membershipElection: MembershipElection
  }
  input PaymentInput {
    amount: Int!
    month: String!
    year: String!
    paymentMethod: String
    paymentDate: String!
    createdDate: String!
    membershipElection: MembershipElectionInput
  }
`;

module.exports = typeDefs;