/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Text } from 'react-native-paper';
import theme from '../../theme';

const STitle = ({ ...props }: {children: React.ReactNode}) => (
  <Text testID='STitle' style={styles.title}>{props.children}</Text>
);

interface Styles {
  title: TextStyle
}

const styles: Styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    fontSize: theme.fontSizes.bigger,
  },
});

export default STitle;