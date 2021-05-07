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

const FilledButton = ({ style, labelStyle, icon, onPress, ...props }: Props) => {
  const buttonStyles = [style, styles.button];
  const labelStyles= [labelStyle, styles.label];

  return (
    <View>
      <Button testID='FilledButton' style={buttonStyles} labelStyle={labelStyles} icon={icon} mode={'contained'} onPress={onPress}>
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
    width: '100%',
    borderRadius: theme.borders.borderRadius,
    borderWidth: 0,
    backgroundColor: theme.colors.primaryColor,
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    fontSize: theme.fontSizes.medium,
  }
});

export default FilledButton;
