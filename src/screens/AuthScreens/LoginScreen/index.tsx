/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import SText from '../../../components/SText';
import theme from '../../../theme';

//TÄHÄN JÄIN; KAIKKI MUU TOIMII :)
const LoginForm = () => {
  return (
    <View style={styles.form}>
      <SText>Tähän formi</SText>
    </View>
  );
};

const LoginContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const BACKGROUND_IMAGE = require('../background.jpg');
  return (
    <ImageBackground 
      style={styles.img} 
      source={BACKGROUND_IMAGE} 
      blurRadius={2}
    >
      <View style={styles.container}>
        <Title>Login below :)</Title>
        <LoginForm />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.colors.gray,
    fontFamily: 'sans-serif-thin',
    fontSize: 30,
    alignSelf: 'center'
  },
  container: {
    height: theme.dimensions.height,
    marginTop: '65%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  img: {
    width: '100%',
    height: '100%'
  },
  form: {
    marginTop: '120%',
  },
  buttons: {
    marginBottom: 20,
  }
});

export default function () {
  return (
    <LoginContainer />
  );
}