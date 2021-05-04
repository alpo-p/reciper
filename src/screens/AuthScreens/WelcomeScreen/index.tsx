/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { View } from 'react-native';
import SLogo from '../../../components/Logo';
import SText from '../../../components/SText';
import STitle from '../../../components/STitle';
import { FoodBackgroundImage } from '../FoodBackgroundImage';
import { LoginOrRegisterContainer } from './LoginOrRegisterContainer';
import { styles } from './styles';

export const WelcomeText = () => (
  <View testID='WelcomeText' >
    <STitle>WELCOME TO</STitle>
    <SLogo />
    <STitle>___________</STitle>
    <SText style={styles.subheading}>Find the best recipes!</SText>
  </View>
);

const WelcomeScreen = () => (
  <FoodBackgroundImage>
    <View style={styles.container}>
      <WelcomeText />
      <LoginOrRegisterContainer />
    </View>
  </FoodBackgroundImage>
);

export default function () {
  return (
    <WelcomeScreen />
  );
}