import { gql } from '@apollo/client';

export const GET_AUTHORIZED_USER = gql`
  query {
    currentUser {
      id
    }
  }
`;