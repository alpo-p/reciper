/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Text } from 'react-native-paper';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import theme from '../../theme';

interface Props {
  children: React.ReactNode,
  style?: StyleProp<TextStyle>
  testID?: string
}

const SText = ({ ...props }: Props) => {
  const _styles = [styles.text, props.style] as TextStyle;
  const { testID } = props;

  return (
    <View testID={testID}>
      <Text testID='SText' style={_styles}>{props.children}</Text>
    </View>
  );
};

interface Styles {
  text: TextStyle
}

const styles: Styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Light',
    paddingRight: 10,
    fontSize: theme.fontSizes.medium,
    alignSelf: 'center',
    color: theme.colors.lightBlack,
  }
});

export default SText;