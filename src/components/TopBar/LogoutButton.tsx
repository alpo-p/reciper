import React from 'react';
import SIcon from '../SIcon';

import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import AuthStorage from '../../utils/authStorage';

const MyRecipesButton = () => {
  const authStorage: AuthStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleLogout = async () => {
    await authStorage.removeAccessToken();
    void apolloClient.resetStore();
  };

  return <SIcon onPress={handleLogout} name='logout' testID='myRecipesButton' size={40} />;
};

export default MyRecipesButton;