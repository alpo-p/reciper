/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import SButton from '../../../components/SButton';
import theme from '../../../theme';

const ChooseLoginOrRegister = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.form}>
      <SButton onPress={() => navigation.navigate('Login')} style={styles.buttons}>
        Already an user? Login! 
      </SButton>
      <SButton onPress={() => navigation.navigate('Register')}>
        Register a new user
      </SButton>
    </View>
  );
};

const WelcomeContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const BACKGROUND_IMAGE = require('../background.jpg');
  return (
    <ImageBackground 
      style={styles.img} 
      source={BACKGROUND_IMAGE} 
      blurRadius={2}
    >
      <View style={styles.container}>
        <Title style={styles.title}>WELCOME TO RECIPER</Title>
        <ChooseLoginOrRegister />
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
    <WelcomeContainer />
  );
}