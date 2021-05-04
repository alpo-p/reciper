/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, TextStyle } from 'react-native';
import theme from '../../theme';

const Logo = () => (
  <Text testID='Logo' style={styles.text}>Reciper</Text>
);

interface Styles {
  text: TextStyle
}

const styles: Styles = StyleSheet.create({
  text: {
    fontFamily: 'TangerineRegular',
    paddingRight: 10,
    fontSize: 85,
    color: 'white',
    textShadowColor: theme.colors.gray,
    textShadowRadius: 2,
    textShadowOffset:{width: 1, height: 1},
    alignSelf: 'center'
  }
});

export default Logo;