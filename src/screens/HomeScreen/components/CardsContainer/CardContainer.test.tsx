import React from 'react';
import { render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import { CardsContainerView } from '.';
import useGetRecipes from '../../../../hooks/useGetRecipes';
import { IRecipes } from '../../../../types';

describe('The CardContainer', () => {
  let getByTestId: (testId: string) => ReactTestInstance;


  beforeEach(() => {
    const recipes: IRecipes = useGetRecipes();
    const handleLikeRecipe = jest.fn();
    const handleShowDetails = jest.fn();

    ({ getByTestId } = render(
      <CardsContainerView 
        recipes={recipes}
        handleLikeRecipe={handleLikeRecipe} 
        handleShowDetails={handleShowDetails} 
      /> 
    ));
  });
  
  it('should have a list of cards inside it', () => {
    expect(getByTestId('listOfCards')).toBeDefined();
  });

});