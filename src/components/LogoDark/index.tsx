/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, TextStyle, View } from 'react-native';
import theme from '../../theme';

const LogoDark = () => (
  <View>
    <Text testID='LogoDark' style={styles.text}>Reciper</Text>
  </View>
);

interface Styles {
  text: TextStyle
}

const styles: Styles = StyleSheet.create({
  text: {
    color: 'black',
    fontFamily: 'TangerineBold',
    paddingRight: 10,
    fontSize: theme.fontSizes.bigger,
    alignSelf: 'center'
  }
});

export default LogoDark;