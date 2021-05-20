import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import Card from './Card';
import useGetRecipes from './useGetRecipes';
import { ExtendedMatchers, IRecipe, IRecipes } from '../../../../../../types';

describe('The Card components', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  let mockHandleLike: () => void;
  let mockHandleShowDetails: () => void;

  beforeEach(() => {
    const recipes: IRecipes = useGetRecipes();
    const recipe: IRecipe = recipes.data.allRecipes[0];
    mockHandleLike = jest.fn();
    mockHandleShowDetails = jest.fn();

    ({ getByTestId } = render(
      <Card 
        recipe={recipe}
        handleLikeRecipe={mockHandleLike}
        handleShowDetails={mockHandleShowDetails}
        testID='card' 
      />
    ));
  });

  it('should render', () => {
    expect(getByTestId('card')).toBeDefined();
  });

  it('should have a picture component', () => {
    expect(getByTestId('cardPicture')).toBeDefined();
  });

  it('should show the title of the recipe', () => {
    (expect(getByTestId('cardTitle') as unknown as ExtendedMatchers).toHaveTextContent('Uunifetapasta'));
  });


  describe('The heart button', () => {
    it('should render correctly', () => {
      expect((getByTestId('cardHeartButton') as unknown as ReactTestInstance)).toBeDefined();
    });

    it('should call the event handler when it is clicked', () => {
      fireEvent.press((getByTestId('cardHeartButton') as unknown as ReactTestInstance));
      expect(mockHandleLike).toHaveBeenCalled();

    });
  });
  
  describe('The info button', () => {
    it('should render correctly', () => {
      expect((getByTestId('cardInfoButton') as unknown as ReactTestInstance)).toBeDefined();
    });

    it('should call the event handler when it is clicked', () => {
      fireEvent.press((getByTestId('cardInfoButton') as unknown as ReactTestInstance));
      expect(mockHandleShowDetails).toHaveBeenCalled();

    });
  });

  it('should show the preparation time', () => {
    
  });
  it('should show some tags related to the recipe', () => {
    
  });
});
