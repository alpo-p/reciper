import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const HomeScreen = () => {
  return (
    <View testID="homeScreen" style={styles.homeContainer}>
      <TopBar testID="topBar"/>
    </View>
  );
};

export default HomeScreen;