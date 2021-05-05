/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import theme from '../../theme';

type Props = {
  style?: StyleProp<ViewStyle>,
  labelStyle?: StyleProp<TextStyle>,
  icon?: string,
  onPress?: () => void,
  children?: React.ReactNode
};

const OutlinedButton = ({ style, labelStyle, icon, onPress, ...props }: Props) => {
  const buttonStyles = [style, styles.button];
  const labelStyles= [labelStyle, styles.label];

  return (
    <View>
      <Button testID='OutlinedButton' style={buttonStyles} labelStyle={labelStyles} icon={icon} mode={'outlined'} onPress={onPress}>
        {props.children}
      </Button>
    </View>
  );
};

interface Styles {
  button: ViewStyle,
  label: TextStyle
}

const styles: Styles = StyleSheet.create({
  button: {
    borderWidth: 1.3,
    borderColor: theme.colors.primaryWhite,
    borderRadius: theme.buttons.borderRadius,
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    fontSize: theme.fontSizes.medium,
    color: theme.colors.primaryWhite,
  }
});

export default OutlinedButton;
