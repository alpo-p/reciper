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

const RECIPE_DETAILS = gql`
  fragment RecipeDetails on Recipe {
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
`;

export const GET_RECIPES = gql`
  query {
    allRecipes {
      ...RecipeDetails
    }
  }
  ${RECIPE_DETAILS}
`;

export const LIKED_RECIPES = gql`
  query {
    likedRecipesByCurrentUser {
      ...RecipeDetails
    }
  }
  ${RECIPE_DETAILS}
`;