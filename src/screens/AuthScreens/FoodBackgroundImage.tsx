/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { ImageBackground, ImageSourcePropType } from 'react-native';

export const FoodBackgroundImage = (props: { children: React.ReactNode; }) => (
  <ImageBackground
    style={{
      width: '100%',
      height: '100%',
    }}
    source={require('./background.jpg') as ImageSourcePropType}
    blurRadius={2}>

    {props.children}
  </ImageBackground>
);