/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, TextStyle, View } from 'react-native';
import theme from '../../theme';

const Logo = () => (
  <View>
    <Text testID='Logo' style={styles.text}>reciper</Text>
  </View>
);

interface Styles {
  text: TextStyle
}

const styles: Styles = StyleSheet.create({
  text: {
    fontFamily: 'TangerineBold',
    paddingRight: 10,
    fontSize: theme.fontSizes.huge,
    alignSelf: 'center'
  }
});

export default Logo;