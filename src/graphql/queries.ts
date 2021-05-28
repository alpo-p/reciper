import { gql } from '@apollo/client';

export const GET_AUTHORIZED_USER = gql`
  query {
    currentUser {
      username
    }
  }
`;

//export const GET_LIKED_RECIPES_FOR_USER = gql`

//`; 

export const GET_RECIPES = gql`
  query {
    allRecipes {
      id
      name
      pictureUrl
      preparationTimeInMinutes
      numberOfServings
      shortDescription
      longDescription
      tags
      ingredients
      stepByStepDirections
    }
  }
`;