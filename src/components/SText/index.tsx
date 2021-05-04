/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Text } from 'react-native-paper';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import theme from '../../theme';

interface Props {
  children: React.ReactNode,
  style?: StyleProp<TextStyle>
}

const SText = ({ ...props }: Props) => {
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
    fontFamily: 'CaviarDreams',
    paddingRight: 10,
    fontSize: theme.fontSizes.medium,
    color: 'white',
    textShadowColor: theme.colors.gray,
    textShadowRadius: 1,
    textShadowOffset:{width: 1, height: 1},
    alignSelf: 'center'
  }
});

export default SText;