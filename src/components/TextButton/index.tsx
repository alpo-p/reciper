/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import theme from '../../theme';

type Props = {
  style?: StyleProp<ViewStyle>,
  labelStyle?: StyleProp<TextStyle>,
  icon?: string,
  onPress?: () => void,
  children?: React.ReactNode
};

const TextButton = ({ style, labelStyle, icon, onPress, ...props }: Props) => {
  const buttonStyles = [style, styles.button];
  const labelStyles= [labelStyle, styles.label];

  return (
    <Button testID='TextButton' style={buttonStyles} labelStyle={labelStyles} icon={icon} mode={'text'} onPress={onPress}>
      {props.children}
    </Button>
  );
};

interface Styles {
  button: ViewStyle,
  label: TextStyle
}

const styles: Styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  label: {
    fontFamily: 'OpenSans-Light',
    fontSize: theme.fontSizes.medium,
    color: theme.colors.primaryWhite,
  }
});

export default TextButton;
