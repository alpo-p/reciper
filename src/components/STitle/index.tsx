/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { Text } from 'react-native-paper';
import theme from '../../theme';

interface Props {
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: StyleProp<any>
  testID?: string
}

const STitle = ({ ...props }: Props ) => (
  <Text testID={props.testID} style={[ styles.title, props.style ]}>{props.children}</Text>
);

interface Styles {
  title: TextStyle
}

const styles: Styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    fontSize: theme.fontSizes.bigger,
    color: theme.colors.primaryWhite,
  },
});

export default STitle;