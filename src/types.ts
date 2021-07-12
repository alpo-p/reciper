/* eslint-disable @typescript-eslint/ban-types */

import { MaterialCommunityIcons } from '@expo/vector-icons';

// Used for testing
export interface ExtendedMatchers extends jest.Matchers<void> {
  toHaveTextContent: (htmlElement: string) => object;
  toBeInTheDOM: () => void;
}

export interface ILogin {
  username: string
  password: string
}

export interface IRegister extends ILogin {
  confirmation: string
}

export interface IRecipe {
  id: string,
  name: string,
  pictureUrl: string,
  preparationTimeInMinutes: number,
  numberOfServings: number,
  longDescription: string,
  tags: string[],
  ingredients: string[],
  stepByStepDirections: string[]
}

export interface IRecipeForm {
  name: string,
  preparationTimeInMinutes: string,
  numberOfServings: string,
  longDescription: string,
  tags: string
  ingredients: string,
  stepByStepDirections: string
}

export interface IRecipes {
  data: {
    allRecipes: IRecipe[]
  }
}

export interface IAllLikedRecipes {
  data: {
    likedRecipesByCurrentUser: IRecipe[]
  }
}

export interface IS3response {
  postResponse: {
    bucket: string
    etag: string
    key: string
    location: string
  }
}

export type MaterialIconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];