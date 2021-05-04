import React from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import theme from '../theme';

type Props = {
  style?: StyleProp<ViewStyle>,
  labelStyle?: StyleProp<TextStyle>,
  icon?: string,
  mode?: 'text' | 'outlined' | 'contained',
  onPress?: () => void,
  children?: React.ReactNode
};

const SButton = ({ style, labelStyle, icon, mode, onPress, ...props }: Props) => {
  const _mode = mode ? mode : 'outlined';
  const buttonStyles = [style, styles.button];
  const labelStyles= [labelStyle, styles.label];
  return (
    <Button style={buttonStyles} labelStyle={labelStyles} icon={icon} mode={_mode} onPress={onPress}>
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
    //width: 150,
    backgroundColor: theme.colors.peachCrayolaTransparent,
    borderRadius: 20,
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF'
  }
});

export default SButton;
