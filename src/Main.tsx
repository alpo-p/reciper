import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from './screens/AuthScreens/WelcomeScreen';

const Stack = createStackNavigator();

const Main = () => (
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName='Welcome'
      screenOptions={{ headerShown: false }} >

      <Stack.Screen name='Welcome' component={WelcomeScreen} />

    </Stack.Navigator>
  </NavigationContainer>
);

export default Main;
