/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { View } from 'react-native';
import SLogo from '../../../components/Logo';
import STitle from '../../../components/STitle';
import { BackgroundImage } from './components/BackgroundImage';
import { LoginAndRegisterContainer } from './components/LoginAndRegisterContainer';
import { styles } from './styles';

export const WelcomeText = () => (
  <View testID='WelcomeText' >
    <View style={styles.logo}>
      <SLogo />
    </View>
    <View style={styles.subheading}>
      <STitle>Find the best recipes.</STitle>
    </View>
  </View>
);

const WelcomeScreen = () => (
  <BackgroundImage>
    <View style={styles.container}>
      <WelcomeText />
      <LoginAndRegisterContainer />
    </View>
  </BackgroundImage>
);

export default function () {
  return (
    <WelcomeScreen />
  );
}