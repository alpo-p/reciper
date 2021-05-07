import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import theme from '../../theme';
import { styles } from './styles';

interface Props {
  style?: StyleProp<ViewStyle>
  label: string
  onChangeText: (arg: string) => void
  onBlur: () => void
  value: string
  error: string | false | undefined
  testID?: string
}

const TextInput = ({ label, style, error, ...props }: Props) => {
  const textInputStyle = error ? [style, styles.errorBorder] : [style];

  return <PaperTextInput 
    selectionColor={theme.colors.primaryColor}
    underlineColor={theme.colors.primaryColor}
    label={label} 
    mode='flat' 
    style={textInputStyle} 
    {...props} 
  />;
};

export default TextInput;