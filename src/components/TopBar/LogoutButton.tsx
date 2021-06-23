import React from 'react';
import SIcon from '../SIcon';

import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import AuthStorage from '../../utils/authStorage';
import theme from '../../theme';
import { View } from 'react-native';

const MyRecipesButton = () => {
  const authStorage: AuthStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleLogout = async () => {
    await authStorage.removeAccessToken();
    void apolloClient.resetStore();
  };

  return (
    <View style={{ marginBottom: 7 }}>
      <SIcon onPress={handleLogout} name='logout' 
        testID='myRecipesButton' size={30} color={theme.colors.lightBlack} />
    </View>
  );
};

export default MyRecipesButton;