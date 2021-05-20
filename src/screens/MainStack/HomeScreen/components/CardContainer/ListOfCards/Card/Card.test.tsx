import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import Card from '.';
import useGetRecipes from '../useGetRecipes';
import { ExtendedMatchers, IRecipe, IRecipes } from '../../../../../../../types';

describe('The Card components', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  let getByText: (text: string) => ReactTestInstance;
  let mockHandleLike: () => void;
  let mockHandleShowDetails: () => void;
  let recipe: IRecipe;

  beforeEach(() => {
    const recipes: IRecipes = useGetRecipes();
    recipe = recipes.data.allRecipes[0];
    mockHandleLike = jest.fn();
    mockHandleShowDetails = jest.fn();

    ({ getByTestId, getByText } = render(
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


  describe('The like/heart button', () => {
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

  describe('PreparationTime component', () => {
    it('should show the preparation time', () => {
      expect(getByTestId('preparationTime')).toHaveTextContent('21');
    });

    it('should show an icon', () => {
      expect(getByTestId('preparationTimeIcon')).toBeDefined(); 
    });
  
  });

  it('should show correct tags related to the recipe', () => {
    expect(getByText('Kotiruoka')).toBeDefined();
    expect(getByText('Helpot')).toBeDefined();
    expect(getByText('Kasvisruoka')).toBeDefined();
  });
});
