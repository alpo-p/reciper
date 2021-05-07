import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import TextInput from "./TextInput";

describe('The TextInput component', () => {
  it('should render correctly', () => {
    const name = 'testi';
    const showError = false;
    let value;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { getByTestId, debug } = render(
      <TextInput
        label={name}
        onChangeText={v => value=v }
        onBlur={() => null}
        value={value as unknown as string}
        error={showError}
        testID='TextInput'
      />
    );

    const component = getByTestId('TextInput');

    expect(component).toBeDefined();
  }); 

  // Gives some warnings to console. Decided to ignore them since hard to debug
  it('should change the text when inputted text', () => {
    const name = 'testi';
    const showError = false;
    let value;
    const { getByTestId } = render(
      <TextInput
        label={name}
        onChangeText={v => value=v }
        onBlur={() => null}
        value={value as unknown as string}
        error={showError}
        testID='TextInput'
      />
    );

    const component = getByTestId('TextInput');
    fireEvent.changeText(component, {
      target: { value: 'testi' }
    });
    expect(value).toStrictEqual({"target": {"value": "testi"}});
  });
});
