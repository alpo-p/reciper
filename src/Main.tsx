import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import useLoadFonts from './hooks/useLoadFonts';
import WelcomeScreen from './screens/AuthScreens/WelcomeScreen';


const Main = () => {
  const [fontsLoaded, error] = useLoadFonts(); 
  
  if (!fontsLoaded || error) {
    return <></>;
  }
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Welcome'
        screenOptions={{ headerShown: false }} >

        <Stack.Screen name='Welcome' component={WelcomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
