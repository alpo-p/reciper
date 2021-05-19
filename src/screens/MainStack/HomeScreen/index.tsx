import React from 'react';
import { View } from 'react-native';

import TopBar from './components/TopBar';
import CardContainer from './components/CardContainer';

import { styles } from './styles';

const HomeScreen = () => {
  return (
    <View testID='homeScreen' style={styles.homeContainer}>
      <TopBar testID='topBar'/>
      <CardContainer testID='cardContainer' />
    </View>
  );
};

export default HomeScreen;