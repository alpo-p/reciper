import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import MyRecipesView from './MyRecipesView';
import { IRecipe } from '../../types';

describe('MyRecipesScreen', () => {
  let getByTestId: (testId: string) => ReactTestInstance;

  beforeEach(() => {
    const mock = jest.fn(); 
    const parsedRecipes: IRecipe[] = [
      {
        id: "1",
        name: "lorem",
        pictureUrl: "lorem",
        preparationTimeInMinutes: 42,
        numberOfServings: 42,
        shortDescription: "lorem",
        longDescription: "lorem",
        tags: ["lorem"],
        ingredients: ["lorem"],
        stepByStepDirections: ["lorem"]
      }
    ];

    const likedRecipeIds = ["123", "321"];

    ({ getByTestId } = render(<MyRecipesView 
      navigateToAddARecipe={mock} 
      navigateToHome={mock}
      recipes={parsedRecipes} 
      handleShowDetails={mock}
      likedRecipes={likedRecipeIds}
      testID="MyRecipesScreen"
    />));
  });

  it('should render', () => {
    expect(getByTestId('MyRecipesScreen')).toBeDefined();
  });

});