/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Title } from 'react-native-paper';
import { StyleSheet, TextStyle } from 'react-native';
import theme from '../../theme';

const STitle = ({ ...props }: {children: React.ReactNode}) => (
  <Title testID='STitle' style={styles.title}>{props.children}</Title>
);

interface Styles {
  title: TextStyle
}

const styles: Styles = StyleSheet.create({
  title: {
    color: 'white',
    textShadowColor: theme.colors.gray,
    textShadowRadius: 2,
    textShadowOffset:{width: 1, height: 1},
    fontFamily: 'OpenSans-Bold',
    fontSize: 30,
    alignSelf: 'center'
  },
});

export default STitle;