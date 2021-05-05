import React from 'react';
import { TextInput as NativeTextInput, ViewStyle, StyleProp } from 'react-native';
import { styles } from './styles';

interface Props {
  style?: StyleProp<ViewStyle>
  onChangeText: (arg: string) => void
  onBlur: () => void
  value: string
  error: string | false | undefined
}

const TextInput = ({ style, error, ...props }: Props) => {
  const textInputStyle = error ? [style, styles.errorBorder] : [style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;