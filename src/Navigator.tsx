import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddARecipeScreen from './screens/AddARecipeScreen';
import WelcomeScreen from './screens/AuthScreen/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import MyRecipesScreen from './screens/MyRecipesScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';

import useAuthorizedUser from './hooks/useAuthorizedUser';
import Loading from './components/Loading';

const Navigator = () => {
  const Stack = createStackNavigator();
  const { authorizedUser, loading } = useAuthorizedUser();

  if (loading) return <Loading />;

  const initialRouteName = authorizedUser ? 'HomeScreen' : 'AuthScreen';

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={initialRouteName}
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name='AuthScreen' component={WelcomeScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='RecipeDetails' component={RecipeDetailsScreen} />
        <Stack.Screen name='MyRecipes' component={MyRecipesScreen} />
        <Stack.Screen name='AddARecipe' component={AddARecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;