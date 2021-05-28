import { gql } from '@apollo/client';

export const GET_AUTHORIZED_USER = gql`
  query {
    currentUser {
      id
      username
      likedRecipes
    }
  }
`;

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