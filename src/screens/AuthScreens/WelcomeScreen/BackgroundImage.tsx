/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import theme from '../../../theme';

// source for image: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F83457399321453561%2F&psig=AOvVaw2x7xuylCUUJ0xOZN7a8PiF&ust=1620283124695000&source=images&cd=vfe&ved=0CA0QjhxqGAoTCODwxJP3sfACFQAAAAAdAAAAABCDAQ
export const BackgroundImage = (props: { children: React.ReactNode; }) => (
  <View style={{
    backgroundColor: 'rgba(0,0,0,.7)'
  }}>
    <ImageBackground
      style={{
        width: theme.dimensions.width,
        height: theme.dimensions.height + 50,
      }}
      imageStyle={{
        opacity: 0.6
      }}
      source={require('../../../../assets/movingBackground.gif') as ImageSourcePropType}
      blurRadius={4}
    >
      {props.children}
    </ImageBackground>
  </View>
);