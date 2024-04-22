import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const GET_MEMBER = gql`
  query getMember($memberId: ID!) {
    getMember(memberId: $memberId) {
      _id
      memberNumber
      firstName
      lastName
      baptismalName
      gender
      startDate
      endDate
      email
      primaryPhone
      secondaryPhone
      paymentFlag
      created_date
      addresses {
        street
        street2
        city
        state
        zip
        country
        created_date
      }
      memberFamilies {
        id
        firstName
        middleName
        lastName
        baptismalName
        gender
        relationShip
        createdDate
      }
      payment {
        amount
        month
        year
        paymentMethod
        paymentDate
        createdDate
      }
    }
  }
`;
export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
