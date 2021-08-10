/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { Video } from 'expo-av';
import { StyleSheet, View } from 'react-native';
import theme from '../../../../theme';

// Video source: https://vod-progressive.akamaized.net/exp=1621001497~acl=%2A%2F1049364409.mp4%2A~hmac=5b5ec8e8794e90e413b694261dabc88f2e02c76a66a398130e227cff2caa67fb/vimeo-prod-skyfire-std-us/01/996/11/279984417/1049364409.mp4
export const BackgroundImage = (props: { children: React.ReactNode; }) => (
  <View style={styles.container}>
    <View style={styles.children}>
      {props.children}
    </View>
    <Video
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      source={require('../../../../../assets/movingBackground.mp4')}
      rate={1.0}
      isMuted={true}
      resizeMode='cover'
      shouldPlay
      isLooping
      style={styles.video}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.7)',
    height: theme.dimensions.height + theme.dimensions.statusBar,
    flex: 1,
    justifyContent: 'center',
  },
  children: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 2
  },
  video: {
    height: theme.dimensions.height + theme.dimensions.statusBar,
    width: theme.dimensions.width,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    opacity: 0.9,
    zIndex: 1
  }
});