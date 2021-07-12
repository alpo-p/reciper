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

export const LIKE_RECIPE = gql`
  mutation likeRecipe($recipeID: ID!) {
    likeRecipe(
      recipeID:$recipeID
    )
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe(
    $name: String!
    $pictureUrl: String!
    $preparationTimeInMinutes: Int!
    $numberOfServings: Int!
    $longDescription: String!
    $tags: [String!]!
    $ingredients: [String!]!
    $stepByStepDirections: [String!]!
  ) {
    addRecipe(
      name: $name
      pictureUrl: $pictureUrl
      preparationTimeInMinutes: $preparationTimeInMinutes
      numberOfServings: $numberOfServings
      longDescription: $longDescription
      tags: $tags
      ingredients: $ingredients
      stepByStepDirections: $stepByStepDirections
    ) {id}
  }
`;