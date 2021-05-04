/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import FilledButton from '../../../components/FilledButton';
import SLogo from '../../../components/Logo';
import SText from '../../../components/SText';
import STitle from '../../../components/STitle';
import TextButton from '../../../components/TextButton';
import theme from '../../../theme';

const ChooseLoginOrRegister = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.form}>
      <FilledButton onPress={() => navigation.navigate('Register')}>
        Register
      </FilledButton>
      <TextButton onPress={() => navigation.navigate('Login')} style={styles.textButton}>
        Already an user? Login! 
      </TextButton>
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
        <STitle>WELCOME TO</STitle>
        <SLogo />
        <STitle>___________</STitle>
        <SText style={styles.subheading}>The best app to find recipes!</SText>
        <ChooseLoginOrRegister />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: theme.dimensions.height,
    marginTop: '65%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  subheading: {
    marginTop: '5%',
    fontSize: theme.fontSizes.bigger
  },
  img: {
    width: '100%',
    height: '100%'
  },
  form: {
    //marginTop: '50%'
    position: 'absolute',
    alignSelf: 'center',
    bottom: '30%'
  },
  textButton: {
    marginTop: '5%',
  }
});

export default function () {
  return (
    <WelcomeContainer />
  );
}