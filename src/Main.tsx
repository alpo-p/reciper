import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './screens/BeforeLoggingIn/LoginScreen';
import RegisterScreen from './screens/BeforeLoggingIn/RegisterScreen';
import WelcomeScreen from './screens/BeforeLoggingIn/WelcomeScreen';

const Stack = createStackNavigator();

const Main = () => (
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName='Welcome'
      screenOptions={{ headerShown: false }} >

      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />

    </Stack.Navigator>
  </NavigationContainer>
);

export default Main;
