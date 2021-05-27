import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import SIcon from '.';

describe('SIcon component', () => {
  let getByTestId: (testId: string) => ReactTestInstance;
  const mockPress = jest.fn();

  beforeEach(() => {
    ({ getByTestId } = render(<SIcon name='heart' onPress={mockPress} testID='Sicon'/>));
  });

  it('should render correctly when called with the name of the icon you want to render', () => {
    expect(getByTestId('Sicon')).toBeDefined();
  });

  it('should register a press on the prop onPress', () => {
    fireEvent.press((getByTestId('Sicon') as unknown as ReactTestInstance));
    expect(mockPress).toHaveBeenCalled();
  });
});
