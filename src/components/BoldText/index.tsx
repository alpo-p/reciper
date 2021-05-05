/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Text } from 'react-native-paper';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import theme from '../../theme';

interface Props {
  children: React.ReactNode,
  style?: StyleProp<TextStyle>
}

const BoldText = ({ ...props }: Props) => {
  const _styles = [styles.text, props.style] as TextStyle;

  return (
    <Text testID='SText' style={_styles}>{props.children}</Text>
  );
};

interface Styles {
  text: TextStyle
}

const styles: Styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Bold',
    paddingRight: 10,
    fontSize: theme.fontSizes.medium,
    alignSelf: 'center',
    color: theme.colors.lightBlack,
  }
});

export default BoldText;