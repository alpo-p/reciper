import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($username:String!, $password:String!){
    login(
      username:$username
      password:$password
    ) {token}
  }
`;

export const REGISTER = gql`
  mutation addUser($username:String!, $password:String!) {
    addUser(
      username:$username
      password:$password
    ) {id}
  }
`;