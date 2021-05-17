import React from 'react';
import { View } from 'react-native';
import SText from '../../../components/SText';
import STitle from '../../../components/STitle';
import { styles } from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <STitle>Toimiii!</STitle>
      <SText>Täällä ollaan</SText>
    </View>
  );
};

export default HomeScreen;