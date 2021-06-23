import React from 'react';
import SIcon from '../SIcon';

import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import AuthStorage from '../../utils/authStorage';
import theme from '../../theme';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyRecipesButton = () => {
  const authStorage: AuthStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigation = useNavigation();

  const handleLogout = async () => {
    await authStorage.removeAccessToken();
    void apolloClient.resetStore();
    navigation.reset({
      index: 0,
      routes: [{ name: 'AuthScreen' }]
    });
  };

  return (
    <View style={{ marginBottom: 7 }}>
      <SIcon onPress={handleLogout} name='logout' 
        testID='myRecipesButton' size={30} color={theme.colors.lightBlack} />
    </View>
  );
};

export default MyRecipesButton;