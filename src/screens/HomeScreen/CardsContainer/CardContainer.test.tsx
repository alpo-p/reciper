import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import { CardsContainerView } from '.';
import { IRecipes } from '../../../types';
// eslint-disable-next-line jest/no-mocks-import
import useGetRecipes from '../../../../__mocks__/useGetRecipes';

describe('The CardContainer', () => {
  let getByTestId: (testId: string) => ReactTestInstance;


  beforeEach(() => {
    const recipes: IRecipes = useGetRecipes();
    const parsedRecipes = recipes.data.allRecipes;

    const handleLikeRecipe = jest.fn();
    const handleShowDetails = jest.fn();

    ({ getByTestId } = render(
      <CardsContainerView 
        recipes={parsedRecipes}
        likedRecipes={[]}
        handleLikeRecipe={handleLikeRecipe} 
        handleShowDetails={handleShowDetails} 
      /> 
    ));
  });
  
  it('should have a list of cards inside it', () => {
    expect(getByTestId('listOfCards')).toBeDefined();
  });

});